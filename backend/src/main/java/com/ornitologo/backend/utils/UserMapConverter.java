package com.ornitologo.backend.utils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class UserMapConverter {
    public static Map<String, String> convertUserToMap(String source){
        Map<String, String> map = new HashMap<>();
        List<String> keys = new ArrayList<>();
        List<String> values = new ArrayList<>();

        String keyRegex = "(\\w+)=";
        String valueRegex = "=\'(\\w+)\'";

        Pattern pattern = Pattern.compile(keyRegex);
        final Matcher keysMatched = pattern.matcher(source);
        pattern = Pattern.compile(valueRegex);
        final Matcher valueMatched = pattern.matcher(source);

        while (keysMatched.find() && valueMatched.find()) {
            for (int i = 1; i <= keysMatched.groupCount(); i++) {
                keys.add(keysMatched.group(1));
            }
            for (int i = 1; i <= valueMatched.groupCount(); i++) {
                values.add(valueMatched.group(1));
            }
        }
//        while (valueMatched.find()) {
//            for (int i = 1; i <= valueMatched.groupCount(); i++) {
//                values.add(valueMatched.group(1));
//            }
//        }
        for (int i = 0; i <= valueMatched.groupCount() || i <= keysMatched.groupCount(); i++) {
            map.put(keys.get(i), values.get(i));
        }

        return map;
    }
}
