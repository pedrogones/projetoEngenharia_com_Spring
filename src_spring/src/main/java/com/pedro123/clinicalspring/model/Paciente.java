package com.pedro123.clinicalspring.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Paciente {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long _id;
  @Column(length = 100, nullable = false)
  private String name;
  @Column(length = 100, nullable = false)
  private String usuario;
   @Column(length = 100, nullable = false)
  private String idade;
  @Column(length = 100, nullable = false)
  private String alergico;
   @Column(length = 100, nullable = false)
  private String contato;
  @Column(length = 100, nullable = false)
  private String infoadd;


}
