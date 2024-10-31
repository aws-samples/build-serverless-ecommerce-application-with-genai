package org.linlinjava.litemall.admin.service;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.auth.credentials.ProfileCredentialsProvider;
import software.amazon.awssdk.core.SdkBytes;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.bedrockruntime.BedrockRuntimeClient;
import software.amazon.awssdk.services.bedrockruntime.model.InvokeModelResponse;

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
}