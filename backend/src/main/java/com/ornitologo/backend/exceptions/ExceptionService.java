package com.ornitologo.backend.exceptions;

public class ExceptionService extends RuntimeException{

    private static final long serialVersionUID = 1L;

    public ExceptionService(String msg){
        super(msg);
    }
}
