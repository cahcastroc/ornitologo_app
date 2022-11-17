package com.ornitologo.backend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
;import javax.servlet.http.HttpServletRequest;
import javax.validation.ConstraintViolationException;
import java.time.Instant;

@ControllerAdvice
public class ControllerExceptionHendler {

    @ExceptionHandler(DatabaseException.class)
    public ResponseEntity<StandardError> entityNotFound(ExceptionService e, HttpServletRequest request){
        StandardError err = new StandardError();
        err.setTimeStamp(Instant.now());
        err.setStatus(HttpStatus.NOT_FOUND.value());
        err.setError("Recurso não encontrado");
        err.setMessage(e.getMessage());
        err.setPath((request.getRequestURI()));
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(err);
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<StandardError> notBlank(ExceptionService e, HttpServletRequest request){
        StandardError err = new StandardError();
        err.setTimeStamp(Instant.now());
        err.setStatus(HttpStatus.NOT_FOUND.value());
        err.setError("Nome não pode estar em branco");
        err.setMessage(e.getMessage());
        err.setPath((request.getRequestURI()));
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(err);
    }
}
