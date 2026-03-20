# Risque de sécuritée

> **Mention**: ICAS étant une application lourde, les différents risques
recensés dans la tier liste OWASP Top 10:2025 est assez peu adapté au contexte
application. Cette tier liste s’applique avant tout à des applications web.

## A01:2025: Broken Access Control

**Contexte**: Il s’agit ici de donner l’accès de l’application aux différentes
ressources du système.

**Failles potentielles**:

- L'application peut demander des droits d'administrateur alors que ce n'est
pas nécessaire, exposant tout le système si elle est compromise.

- Accès non restreint au système de fichiers : L'application peut lire/écrire
des fichiers en dehors de son répertoire de travail ou de son répertoire de
données autorisées. Une faille de type Path Traversal pourrait permettre de
modifier des fichiers système critiques.

- Contournement des mécanismes de licence : Si notre application dispose d'un
système de licence, une faille dans la logique de contrôle pourrait permettre
à un utilisateur de débloquer des fonctionnalités payantes (possiblement
l'entièreté de l’application).

## A04:2025 - Cryptographic Failures

**Contexte**: Concerne toute donnée sensible stockée localement ou transmise.
Il ne s’agit pas nécessairement de mots de passe ou encore d’adresses mails.

**Failles potentielles**:

- Stockage de secrets en clair : L'application peut stocker des clés API, des
clés de licence ou toute autre information sensible en clair dans un fichier de
configuration, que ce soit dans le répertoire de travail / d’exécution de
l'application, dans une base de données locale, ou tout simplement en dur dans
le binaire de l’application.

- Utilisation d'algorithmes cryptographiques faibles/obsolètes : Utilisation de
MD5/SHA1 pour vérifier l'intégrité, ou d'un chiffrement faible comme DES.

- Mauvaise gestion des clés : Clé de chiffrement hardcodée dans le code, ou une
clé générée avec une source d'entropie faible (mauvaise génération de nombres
aléatoires).

## A03:2025 - Injection

**Contexte**: L'utilisation d’une base de données est la principale cause d'une
injection autrement appelée ‘Injections SQL’, le principe d'injecter des
données qui seront interprétées comme une commande qui pourrait alors altérer
des données, ou venir donner des accès privés à certaines informations
sensible. Dans le cas de notre application, même sans base de données, les
injections pourraient encore survenir.

**Failles potentielles**:

- Injection de Commande (OS Command Injection) : Si notre application utilise
des entrées (ex: un chemin de fichier fourni par l'utilisateur) pour construire
une commande système à exécuter, un attaquant pourrait injecter des commandes
arbitraires. Ex: filename.txt; rm -rf /.

- Path Traversal : Une entrée utilisateur est utilisée pour construire un
chemin de fichier. Un attaquant pourrait fournir ../../../../etc/passwd pour
tenter de lire des fichiers sensibles.

- Injection dans des parseurs : Si l'application parse des fichiers complexes
(XML, JSON, YAML, etc.), une entrée malformée pourrait exploiter une
vulnérabilité dans le parseur.

## A06:2025 - Vulnerable and Outdated Components

**Contexte**: Il s’agit de la faille de sécurité la plus probable dans la cas
de notre application lourde. Elle concerne avant tout l’utilisation
d'utilitaires qui pourraient eux même avoir des failles de sécurités, ou des
utilitaires obsolètes (risques de vulnérabilité accrues).

**Failles potentielles**:

- Dépendances du langage utilisé non à jour : Une des dépendances utilisées,
ou une dépendance transitive (une dépendance de nos dépendances), contient une
faille de sécurité connue.

- Bibliothèques système ou dynamiques liées : L’application peut se lier à des
bibliothèques externes d’autres langages (via FFI). Si ces bibliothèques ne
sont pas à jour, l’application hérite de leurs vulnérabilités.

## A08:2025 - Software and Data Integrity Failures

**Contexte**: Une faille ou plusieurs failles qui peuvent toucher l’altération
du logiciel ou de ses données pour un utilisateur.

**Failles potentielles**:

- Mécanisme de mise à jour non sécurisé : L'application télécharge une mise à
jour via HTTP (non chiffré) sans vérifier la signature cryptographique du
binaire téléchargé. Un attaquant pourrait intercepter la connexion et remplacer
la mise à jour par un malware (Attaque Man-in-the-Middle).

- Absence de signature de code : Les binaires pour Windows et MacOS ne sont pas
signés. Cela permet à un attaquant de modifier le binaire et de le
redistribuer, et le système d'exploitation sans altérer l'utilisateur.

- Validation d'intégrité des fichiers de configuration/données locaux : Si
l'application charge un état ou une configuration depuis un fichier ou une base
de donnée locale, un attaquant pourrait modifier ce fichier ou cette base de
données pour provoquer un crash (Déni de Service) ou un comportement inattendu.

Nous pouvons aussi retrouver un grand nombre de failles de sécurité liées à la
gestion de mémoire. D’autant plus sur une application lourde qui pourrait être
construite à base de C/C++ ou de Rust et en intégrant une toolchain complète
entre différents langages via le FFI.

## CWE-120 (Buffer Overflow)

**Contexte**: L'application fait un dépassement de tampon ou débordement de
tampon créant ainsi un bug par lequel un processus, lors de l'écriture dans un
tampon, écrit à l'extérieur de l'espace alloué au tampon, écrasant ainsi des
informations nécessaires au processus. Ceci peut alors provoquer un crash ou de
l'altération de données ou de processus, parfois sensibles, concernant
directement le système d’exploitation.

## CWE-416 (Use After Free)

**Contexte**: Le processus peut continuer d’utiliser une adresse mémoire même
après sa libération, ce qui provoque des erreurs de mémoire menant la plupart
du temps à un crash.

## CWE-787 (Out-of-bounds Write) / CWE-119 (Improper Restriction of Operations within the Bounds of a Memory Buffer)

**Contexte**: Un utilisateur ouvre un fichier malformé (ex: une image, un
document compressé "zip bomb") qui provoque une boucle infinie, une allocation
de mémoire excessive, ou un crash systématique, rendant l'application
inutilisable.

## CWE-400 (Uncontrolled Resource Consumption)

**Contexte**: Certains langages, C/C++ Rust font ce que l’on appelle un
"wrapping" sur les dépassements d’entier, ce qui peut engendrer des bugs de
logique critique. (Ex: Vol 501 d'Ariane 5).

## CWE-367 (Time-of-check Time-of-use (TOCTOU) Race Condition)

**Contexte**: Des données sensibles peuvent rester en mémoire RAM plus
longtemps que nécessaire, ce qui pourrait permettre à un attaquant de dumper
la mémoire du processus pour récupérer ces informations sensibles.

## CWE-190 (Integer Overflow or Wraparound)

**Contexte**: Lorsque de l’application peut être amenée à vérifier l'existence
d'un fichier ainsi que de ses permissions (Time-of-Check), puis peut alors
l'ouvrir pour le lire ou y écrire (Time-of-Use). Entre ces deux moments, un
attaquant peut remplacer ce fichier par un lien symbolique vers un fichier
système.

