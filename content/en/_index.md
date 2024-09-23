---
title: "DéCySif"
sectiontitle: "Home"
cascade:
  featured_image: '/images/Decysif.png'
description: "Formal verification in the service of safety and security"
synopsis: "DéCySif is a regional R&D project funded by an i-Démo call and the
Ile-de-France French region gathering AdaCore, Inria, OCamlPro and TrustInSoft.
Its objective is to improve the safety and security of critical systems using
formal verification tools."

project:
  sectiontitle: "The project"
  content: "It has been a few years since Rust has proven to be a viable
  alternative to languages such as Ada/C/C++ in the world of embedded software,
  critical or not. Current and upcoming actors of the Rust critical embedded
  software world are now exploring the possibility of using formal analysis
  tools for Rust.
  <br />
  <br />
  It is as a direct answer to that question that Inria have developped Creusot, a
  tool for Rust. The tool itself is based off the same technological foundations
  as AdaCore's and TrustInSoft's formal analysis tools: the Why3 platform,
  developped by Inria, and a collections of SMT-Solvers such as Alt-Ergo,
  developped by OCamlPro.
  <br />
  <br />
  Project DéCySif is the crucible for the improvement of all these tools and
  aims at guaranteeing convergence towards an optimal solution for the safety
  and security of embedded systems. "
  img:
    alt: "An image that shows the connections between the tools developed by
    the actors of the DéCySif project. In the center, we see the Why3 platform,
    and on the left side, the languages (Creusot, SPARK, TIS Analyzer) and the
    Alt-Ergo prover on the right side."

coordinator:
  sectiontitle: "Coordinator"
  content: "TrustInSoft are the coordinators of the project. For any enquiry,
  please use the [contact form]({{< ref \"contact.en.md\" >}})."

publications:
  - papername: "Formally Verified Rounding Errors of the Logarithm-Sum-Exponential Function"
    url: "https://inria.hal.science/hal-04674600"

software:
  sectiontitle: "Our software"
  tools:
    - name: "Why3, a platform for deductive program verification."
      url:
        - "https://www.why3.org/"
      description: "Why3 provides a rich language for specification and
      programming, called WhyML, and relies on external theorem provers, both
      automated and interactive, to validate verification conditions. Why3
      comes with a standard library of logical theories (integer and real
      arithmetic, boolean operations, sets, etc.) and basic programming data
      structures (arrays, queues, hash tables, etc.). A user can write WhyML
      programs directly and obtain correct-by-construction OCaml programs via
      an automated extraction mechanism.
      <br />
      <br />
      WhyML is also used as an intermediate language for the verification of C,
      Ada, Rust, etc. programs. Why3 can be easily extended with support for
      new theorem provers. Why3 can be used as a software library via an OCaml
      API."

    - name: "Creusot, software for deductive verification of Rust code."
      url:
        - "https://github.com/creusot-rs/creusot"
      description: "Creusot verifies that the code it is given to analyze is
      free from risks of 'panic,' arithmetic overflow, or invalid assertions.
      By adding annotations, one can go further and check that the code
      conforms to a formal specification of its expected behavior.
      <br />
      <br />
      Creusot works by translating Rust code into WhyML, the specification and
      verification language of Why3. Users can then leverage the full power of
      Why3 to semi-automatically discharge verification conditions."

    - name: "Alt-Ergo, the automatic prover for code verification."
      url:
       - "https://alt-ergo.ocamlpro.com"
       - "https://github.com/ocamlpro/alt-ergo"
       - "https://ocamlpro.com/fr/club-alt-ergo/"
      description: "Alt-Ergo is an automatic theorem prover, based on
      Satisfiability Modulo Theories (SMT). This family of provers has made
      impressive progress and has become very popular in fields as varied as
      hardware design, code verification, and formal testing. Alt-Ergo stands
      out in the latter two fields due to its inherent support for
      polymorphism, its compatibility with the SMT2 format, and several
      theories that allow it to formally handle basic types. The Alt-Ergo Club
      brings together a group of industrials (Thales, MERCE, Trust In Soft,
      AdaCore, etc.) using Alt-Ergo in their activities and helps to fund the
      evolution of Alt-Ergo."

    - name: "SPARK, an industrial tool for deductive verification of the Ada language."
      url:
        - "https://www.adacore.com/about-spark"
        - "https://www.adacore.com/sparkpro"
        - "https://docs.adacore.com/spark2014-docs/html/ug/"
      description: "SPARK is both a language derived from the Ada language and
      an analysis tool that allows for the verification of programs written in
      this language. This tool enables the verification of the absence of
      runtime errors as defined in the Reference Manual, as well as the
      functional properties of subprograms expressed as contracts. SPARK relies
      on Why3 and the WhyML language to generate and prove verification
      conditions. Additionally, SPARK also distributes a library, SPARKlib,
      which includes annotated containers, allowing their use in SPARK code, or
      lemmas to facilitate the proof of programs using operations on
      floating-point numbers. SPARK is used at an industrial level, notably for
      cybersecurity issues by NVIDIA, or workstations implementing multiple
      levels of security."    

    - name: "TIS Analyzer"
      url:
        - "https://www.trust-in-soft.com/trustinsoft-analyzer"
      description:
        "TrustInSoft Analyzer is a static analyzer for C and C++ code. It
        includes several complementary analysis techniques. The first uses
        abstract interpretation to verify the absence of undefined behaviors (UB)
        in a program. These undefined behaviors can lead to runtime errors and
        constitute a large portion of security vulnerabilities in C and C++
        software. The second level of analysis, in addition to verifying the
        absence of UB, checks the validity of functional properties expressed as
        function contracts and assertions in the code. This part is done by
        translating C/C++ code into WhyML via Why3. These analysis techniques are
        used in industry and are recognized by the U.S. federal agency, the
        National Institute of Standards and Technology (NIST)."

collaborators:
  sectiontitle: "The consortium"
  consortium:
    - name: "AdaCore"
      url: "https://www.adacore.com/"
      description:
        "Founded in 1994, AdaCore designs and provides software development and
        verification tools for applications where safety, security, and reliability
        are critical elements.<br />
        The use of AdaCore products continues to grow in critical applications such
        as space systems, commercial avionics, military systems, air traffic
        control, railway systems, medical devices, or financial services. AdaCore
        enjoys a substantial and constantly growing base of international clients;
        visit www.adacore.com/industries/ for more information.<br />
        AdaCore products are free and come with expert online support provided by
        the developers themselves. The company has a North American headquarters
        based in New York and a European headquarters based in Paris."
    
    - name: "Inria - LMF - Toccata"
      url: "https://www.inria.fr/en/toccata"
      description: 
        "The [Inria](https://www.inria.fr) is the French national public institute
        for research in computer science. The Inria members of the DéCySif project
        belong to the Formal Methods Laboratory ([LMF](https://lmf.cnrs.fr/))
        and the Toccata research team
        ([Toccata](http://toccata.gitlabpages.inria.fr/toccata/)), located in
        Orsay, France; and jointly affiliated with the University of
        Paris-Saclay, CNRS, and the Inria Saclay - Île-de-France research
        center.
        <br />
        The general objective of the team is to promote formal specifications
        and computer-assisted proofs in the development of software requiring a
        high level of confidence in their safety and adherence to expected
        behaviors."
    
    - name: "OCamlPro"
      url: "https://www.ocamlpro.com"
      description:
        "[OCamlPro](https://ocamlpro.com/) is an R&D consulting firm specializing in engineering problems
        related to programming languages, business-specific requirements, or
        technical debt. The company is committed to open source and contributes to
        the [Rust](https://red-iron.eu/), WebAssembly, and OCaml languages. The company also develops the
        [Alt-Ergo SMT solver](https://alt-ergo.ocamlpro.com/) used in DéCySif.<br />
        OCamlPro is also active in the field of Common Criteria certification at
        the EAL6 level and the use of formal methods (Coq, Lean4, Why3)."
    
    - name: "TrustInSoft"
      url: "https://trust-in-soft.com/"
      description:
        "TrustInSoft markets tools and services for exhaustive analysis of C and C++
        source code, providing mathematical guarantees on the quality of their
        clients' software. These software analysis solutions ensure the security
        and reliability of source code without altering the development process.
        These offerings are deployed worldwide among developers and integrators of
        software components from the aerospace, automotive, railway, military,
        nuclear, telecoms, or IoT industries."
---
