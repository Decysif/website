---
title: "DéCySif"
sectiontitle: "Accueil"
cascade:
  featured_image: '/images/Decysif.png'
description: "La vérification formelle au service de la sécurité et la sûreté"
synopsis: "DéCySif est un projet i-Demo régional de R&D regroupant AdaCore,
l'Inria, OCamlPro et TrustInSoft. Il vise à améliorer la sécurité et la sûreté
des systèmes critiques en utilisant des outils de vérification formelle."

project:
  sectiontitle: "Le projet"
  content: "Depuis quelques années, le langage de programmation Rust vient
  concurrencer les langages Ada/C/C++ établis dans le monde des logiciels
  critiques, embarqués ou non. Les acteurs actuels et futurs développant des
  logiciels critiques en Rust se posent désormais la question de l'opportunité
  d'utiliser des outils d’analyse formelle pour Rust.
  <br />
  <br />
  C'est pour répondre à cette question que l'outil Creusot pour Rust a été
  développé par l'Inria. L'outil est basé sur les mêmes fondations technologiques
  que les outils d’analyse formelle d’AdaCore et de TrustInSoft : la plateforme
  Why3 développée par l'Inria et les mêmes prouveurs automatiques dont le
  prouveur Alt-Ergo d'OCamlPro.
  <br />
  <br />
  Le projet DéCySif vie l'amélioration de tous ces outils afin de converger vers
  une solution optimale pour la sécurité et la sûreté des systèmes critiques."
  img:
    alt: "Une image qui montre les liens entre les outils développés par les
    acteurs du projet DéCySif. On voit au centre la platforme Why3 et, à
    gauche, les langages et outils utilisés et de l'autre le prouveur
    Alt-Ergo."

coordinator:
  sectiontitle: "Coordinateur"
  content: "La société TrustInSoft est le coordinateur du projet. Pour toute
  demande d'information, veuillez passer par le formulaire de [contact]({{< ref \"contact.fr.md\" >}})."

publications:
  - papername: "Formally Verified Rounding Errors of the Logarithm-Sum-Exponential Function"
    url: "https://inria.hal.science/hal-04674600"

software:
  sectiontitle: "Les logiciels"
  tools:
    - name: "Why3, une plateforme de vérification déductive de programmes."
      url:
        - "https://www.why3.org/"
      description: "Why3 fournit un langage riche pour la spécification et la
      programmation, appelé WhyML, et s'appuie sur des prouveurs de théorèmes
      externes, à la fois automatisés et interactifs, pour valider les
      conditions de vérification. Why3 est livré avec une bibliothèque standard
      de théories logiques (arithmétique entière et réelle, opérations
      booléennes, ensembles, etc.) et de structures de données de programmation
      de base (tableaux, files d'attente, tables de hachage, etc. ). Un
      utilisateur peut écrire des programmes WhyML directement et obtenir des
      programmes OCaml corrects par construction via un mécanisme d'extraction
      automatisé.
      <br />
      <br />
      WhyML est également utilisé comme langage intermédiaire pour la
      vérification des programmes C, Ada, Rust, etc. Why3 peut être facilement
      étendu avec la prise en charge de nouveaux prouveurs de théorèmes. Why3
      peut être utilisé comme bibliothèque logicielle, via une API OCaml."

    - name: "Creusot, le logiciel pour la vérification déductive de code Rust."
      url:
        - "https://github.com/creusot-rs/creusot"
      description: "Creusot vérifie que le code qui lui est donné à analyser
      est exempt de risque de « panic », de débordement arithmétique ou
      d'assertion invalide. En ajoutant des annotations, on peut aller plus
      loin et vérifier que le code est conforme à une spécification formelle de
      son comportement attendu.
      <br />
      <br />
      Creusot fonctionne en traduisant le code Rust en WhyML, le langage de
      vérification et de spécification de Why3. Les utilisateurs peuvent alors
      exploiter toute la puissance de Why3 pour décharger semi-automatiquement
      les conditions de vérification."

    - name: "Alt-Ergo, le prouveur automatique pour la vérification de code."
      url:
       - "https://alt-ergo.ocamlpro.com"
       - "https://github.com/ocamlpro/alt-ergo"
       - "https://ocamlpro.com/fr/club-alt-ergo/"
      description: "Alt-Ergo est un prouveur automatique de théorèmes, basé sur
      la Satisfiabilité Modulo Théories (SMT). Cette famille de prouveurs a
      fait des progrès impressionnants, et sont devenus très populaires dans
      des domaines aussi variés que la conception de hardware, la vérification
      de code et le test formel. Alt-Ergo se distingue dans ses deux derniers
      domaines, grâce à son support inné du polymorphisme, sa compatibilité
      avec le format SMT2 et plusieurs théories lui permettant de manipuler
      formellement les types de base. Le Club Alt-Ergo rassemble un groupe
      d’industriels (Thales, MERCE, Trust In Soft, AdaCore, etc.) utilisant
      Alt-Ergo dans leur activité et permet de financer l’évolution
      d’Alt-Ergo."

    - name: "SPARK, un outil industriel de vérification déductive pour le langage Ada."
      url:
        - "https://www.adacore.com/about-spark"
        - "https://www.adacore.com/sparkpro"
        - "https://docs.adacore.com/spark2014-docs/html/ug/"
      description: "SPARK est à la fois un langage dérivé du langage Ada et un
      outil d'analyse permettant de vérifier des programmes écrits dans ce
      langage. Cet outil permet de vérifier l'absence d'erreurs à l'exécution
      comme définies dans le Manuel de Référence, mais également des propriétés
      fonctionnelles des sous-programmes exprimées sous forme de contrats.
      SPARK s'appuie sur Why3 et le langage WhyML pour générer et prouver les
      conditions de vérification. Enfin, SPARK distribue également une
      bibliothèque, SPARKlib, contenant entre autres des conteneurs annotés,
      permettant leur utilisation dans du code SPARK, ou des lemmes permettant
      de faciliter la preuve de programmes utilisant des opérations sur des
      nombres à virgule flottante. SPARK est utilisé au niveau industriel,
      notamment pour des problématiques de cybersécurité par NVIDIA, ou des
      stations de travail multiniveau sécurisées par secunet."

    - name: "TIS Analyzer"
      url:
        - "https://www.trust-in-soft.com/trustinsoft-analyzer"
      description:
        "TrustInSoft Analyzer est un analyseur statique de code C et C++. Il
        comprend plusieurs techniques complémentaires d'analyses. La première
        utilise l'interprétation abstraite pour vérifier l'absence de
        comportements non-définis (undefined behavior (UB) en anglais) dans un
        programme. Ces comportements non-définis peuvent mener à des runtime
        errors et constituent une large part des failles de sécurité des
        logiciels C et C++. Le deuxième niveau d'analyse permet, en plus de la
        vérification de l'absence d'UB, de vérifier la validité de propriétés
        fonctionnelles exprimées sous la forme de contrats de fonction et
        d'assertions dans le code. Cette partie se fait en traduisant Why3 via
        une traduction du code C/C++ en WhyML. Ces techniques d'analyses sont
        utilisées industriellement et sont reconnues par l'agence américaine
        fédérale National Institute of Standards and Technology (NIST)."

collaborators:
  sectiontitle: "Le consortium"
  consortium:
    - name: "AdaCore"
      url : "https://www.adacore.com/"
      description:
        "Fondée en 1994, AdaCore conçoit et fournit des outils de développement et
        de vérification de logiciels destinés à des applications pour lesquelles la
        sûreté, la sécurité et la fiabilité sont des éléments critiques.<br />
        L'utilisation des produits AdaCore connaît une croissance continue dans des
        applications critiques telles que les systèmes spatiaux, l'avionique
        commerciale, les systèmes militaires, le contrôle aérien, les systèmes
        ferroviaires, les appareils médicaux ou les services financiers. AdaCore
        jouit d'une base fournie de clients internationaux en croissance
        constante; visitez le site www.adacore.com/industries/ pour de plus amples
        informations.<br />
        Les produits AdaCore sont libres et accompagnés d'un support expert en
        ligne fourni par les développeurs eux-mêmes. La société possède un siège
        nord-américain basé à New York et un siège européen basé à Paris."
    
    - name: "Inria - LMF - Toccata"
      url: "https://www.inria.fr/fr/toccata"
      description:
        "L'[Inria](https://www.inria.fr) est l'institut national public
        français de recherche en sciences de l'informatique. Les membres Inria
        du projet DéCySif appartiennent au Laboratoire Méthodes Formelles
        ([LMF](https://lmf.cnrs.fr/)) et à l'équipe de recherche
        [Toccata](http://toccata.gitlabpages.inria.fr/toccata/), localisés à
        Orsay, France ; et communs à l'Université Paris-Saclay, au CNRS, et au
        centre de recherche Inria Saclay - Île-de-France.
        <br />
        L'objectif général de l'équipe est de promouvoir les spécifications
        formelles et les preuves assistées par ordinateur dans le cadre du
        développement de logiciels requérant un haut niveau de confiance dans
        leur sûreté de fonctionnement et le respect de comportements attendus."
    
    - name: "OCamlPro"
      url: "https://www.ocamlpro.com"
      description: 
        "OCamlPro est un cabinet d'étude en R&D spécialisé dans les problèmes
        d'ingénieurie liés aux langages de programmation, aux spécificités métiers
        ou à la dette technique. La société est engagée dans l'*open source*
        et contribue aux langages Rust, WebAssembly et OCaml. La société développe
        aussi le prouveur SMT Alt-Ergo utilisé dans DéCySif.<br />
        OCamlPro est également active dans le domaine de la certification
        Critères Communs au niveau EAL6 et l'utilisation des méthodes formelles
        (Coq, Lean4, Why3)."
    
    
    - name: "TrustInSoft"
      url: "https://trust-in-soft.com/"
      description: 
        "TrustInSoft commercialise des outils et services d'analyse exhaustive de
        code source C et C++ permettant d'apporter des garanties mathématiques sur
        la qualité des logiciels de ses clients. Ces solutions d'analyses de
        logiciel permettent d'avoir des garanties sur la sécurité et la fiabilité
        du code source sans modifier le processus de développement. Ces offres
        sont déployées dans le monde entier chez les développeurs et intégrateurs
        de composants logiciels issus des industries aéronautique, automobile,
        ferroviaire, militaire, nucléaire, télécoms, ou l'IoT."
---
