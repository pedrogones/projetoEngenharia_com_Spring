package com.pedro123.clinicalspring.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pedro123.clinicalspring.RepositorioPacientes.PacienteRepository;
import com.pedro123.clinicalspring.model.Paciente;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/paciente")
@AllArgsConstructor

public class ControllerPaciente {

  private final PacienteRepository pacienteRepository;

  @GetMapping
  public List<Paciente> list(){
    return pacienteRepository.findAll();
  }

}
