package com.ornitologo.backend.utils;

import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class UserMapConverter {
    public static Map<String, String> convertUserToMap(String source) {

        ObjectMapper mapper = new ObjectMapper();
        Map<String, String> user = new HashMap<String, String>();

        try {
            user = mapper.readValue(source, Map.class);
        } catch (JsonMappingException e) {
            e.printStackTrace();
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return user;
    }
}
