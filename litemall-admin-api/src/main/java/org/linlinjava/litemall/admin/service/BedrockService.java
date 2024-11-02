package org.linlinjava.litemall.admin.service;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.core.SdkBytes;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.bedrockruntime.BedrockRuntimeClient;
import software.amazon.awssdk.services.bedrockruntime.model.InvokeModelRequest;
import software.amazon.awssdk.services.bedrockruntime.model.InvokeModelResponse;

import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Service
public class BedrockService {

    public static List<String> invokeMistral7B(String prompt) {
        BedrockRuntimeClient client = BedrockRuntimeClient.builder()
                .region(Region.US_WEST_2)
                .build();

        // Mistral instruct models provide optimal results when
        // embedding the prompt into the following template:
        String instruction = "<s>[INST] " + prompt + " [/INST]";

        String modelId = "mistral.mistral-7b-instruct-v0:2";

        String payload = new JSONObject()
                .put("prompt", instruction)
                .put("max_tokens", 200)
                .put("temperature", 0.5)
                .toString();

        InvokeModelResponse response = client.invokeModel(request -> request
                .accept("application/json")
                .contentType("application/json")
                .body(SdkBytes.fromUtf8String(payload))
                .modelId(modelId));

        JSONObject responseBody = new JSONObject(response.body().asUtf8String());
        JSONArray outputs = responseBody.getJSONArray("outputs");

        System.out.print(outputs);

        return IntStream.range(0, outputs.length())
                .mapToObj(i -> outputs.getJSONObject(i).getString("text"))
                .collect(Collectors.toList());

    }

    public static String invokeClaude3(String prompt, MultipartFile image) {
        /*
         * The different model providers have individual request and response formats.
         * For the format, ranges, and default values for Anthropic Claude, refer to:
         * https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters-claude.html
         */

        String claudeModelId = "anthropic.claude-3-sonnet-20240229-v1:0";

        // Claude requires you to enclose the prompt as follows:
        //String enclosedPrompt = "Human: " + prompt + "\n\nAssistant:";

        BedrockRuntimeClient client = BedrockRuntimeClient.builder()
                .region(Region.US_WEST_2)
                .build();

        JSONArray contentArray = new JSONArray();

        // 添加图片内容
        JSONObject imageContent = new JSONObject();
        imageContent.put("type", "image");
        JSONObject imageSource = new JSONObject();
        imageSource.put("type", "base64");
        imageSource.put("media_type", image.getContentType());
        try {
                imageSource.put("data", Base64.getEncoder().encodeToString(image.getBytes()));
            } catch (IOException e) {
                throw new RuntimeException("Error processing image: " + e.getMessage(), e);
            }
        imageContent.put("source", imageSource);
        contentArray.put(imageContent);


        JSONObject content = new JSONObject();
        content.put("type", "text");
        content.put("text", prompt);


        JSONObject textContent = new JSONObject();
        textContent.put("type", "text");
        textContent.put("text", prompt);
        contentArray.put(textContent);

        JSONObject messages = new JSONObject();
        messages.put("role", "user");
        messages.put("content", contentArray);

        JSONArray messagesArray = new JSONArray();
        messagesArray.put(messages);

        String payload = new JSONObject()
                .put("anthropic_version", "bedrock-2023-05-31")
                .put("max_tokens", 1000)
                .put("system", "You are an AI assistant capable of understanding and describing images.")
                .put("messages", messagesArray)
                .toString();

        InvokeModelRequest request = InvokeModelRequest.builder()
                    .body(SdkBytes.fromUtf8String(payload))
                    .modelId(claudeModelId)
                    .contentType("application/json")
                    .accept("application/json")
                    .build();

        InvokeModelResponse response = client.invokeModel(request);

        JSONObject responseBody = new JSONObject(response.body().asUtf8String());
        String generatedText = responseBody.getJSONArray("content").getJSONObject(0).getString("text");

        return generatedText;
 
}


}