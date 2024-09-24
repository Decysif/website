---
layout: "deliverables"
description: "**Formal verification in the service of safety and security**"
title: "Deliverables"
synopsis: "The DéCySif project provides a framework for the consortium to produce a set of deliverables as well as a series of diverse scientific papers, which will be compiled below as they are published."
project_deliverables:
  repository: "https://github.com/Decysif/livrables/tree/master"
  lots:
    - lot_nb: "Lot 1"
      papers:
        - id: "L1.1"
          name: "Constitution d’une base de fichiers d’entrée représentatifs des difficultés rencontrées pour générer des exploits."
          synopsys: "This deliverable consists of a test suite located in the 'benchmarks' repository of the Décysif project. The objectives of the deliverable are to identify weaknesses in the reconstruction of a counterexample by Why3 from SMT solver models, or in the procedures for verifying and categorizing counterexamples."
          leader: "TrustInSoft"
          authors:
            - "Guillaume Cluzel (TrustInSoft)"
            - "Matteo Manighetti (Inria & Université Paris-Saclay)"
            - "Claude Marché (Inria & Université Paris-Saclay)"
            - "Yannick Moy (AdaCore)"
          pdf_url: "/pdf/livrable_l1_1.pdf"
        - id: "L2.1"
          name: "Constitution d’une base de fichiers d’entrée représentatifs des difficultés rencontrées pour la preuve automatique."
          synopsys: "This deliverable consists of a test suite located in the 'benchmarks' repository of the Décysif project, with the objectives of identifying weaknesses in the Alt-Ergo solver, detecting translation issues (or identifying problems in the writing of theories, such as the memory model of J3) for all solvers: CVC5, CVC4, Z3, and Alt-Ergo."
          leader: "AdaCore"
          authors:
            - "Yannick Moy (AdaCore)"
            - "Guillaume Cluzel (TrustInSoft)"
            - "Matteo Manighetti (Inria & Université Paris-Saclay)"
            - "Claude Marché (Inria & Université Paris-Saclay)"
          pdf_url: "/pdf/livrable_l2_1.pdf"

publications:
  - papername: "Formally Verified Rounding Errors of the Logarithm-Sum-Exponential Function"
    url: "https://inria.hal.science/hal-04674600"
    date: "2024"
    authors:
      - "Paul Bonnot"
      - "Benoît Boyer"
      - "Florian Faissole"
      - "Claude Marché"
      - "Raphaël Rieu-Helft"
---
