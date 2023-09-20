package com.pedro123.clinicalspring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.pedro123.clinicalspring.RepositorioPacientes.PacienteRepository;
import com.pedro123.clinicalspring.model.Paciente;

@SpringBootApplication
public class ClinicalspringApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClinicalspringApplication.class, args);
	}

  @Bean
  CommandLineRunner initDataBase(PacienteRepository pacienteRepository){
    return args->{
      pacienteRepository.deleteAll();
      Paciente p = new Paciente();
      p.setName("Pedro");
      p.setAlergico("sim");
      p.setContato("(83) 991643401");
      p.setInfoadd("Nenhuma");
      p.setIdade("19");
      p.setUsuario("pedrotargino");

      pacienteRepository.save(p);
     // pacienteRepository.save(new Paciente());
    };
  }

}
