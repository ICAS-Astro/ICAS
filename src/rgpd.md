# RGPD

## Règlement Général sur la Protection des Données (RGPD)

Les 7 Principes Fondamentaux (Article 5) Tout traitement de données
personnelles doit respecter ces principes:

- Licéité, Loyauté et Transparence: Traiter les données de manière légale,
juste et transparente pour la personne concernée.

- Limitation des finalités: Collecter les données pour des objectifs
déterminés, explicites et légitimes, et ne pas les traiter ultérieurement de
manière incompatible.

- Minimisation des données: Ne collecter que les données strictement
nécessaires au regard de la finalité.

- Exactitude: Les données doivent être exactes et tenues à jour.

- Limitation de la conservation: Ne pas conserver les données plus longtemps
que nécessaire.

- Intégrité et confidentialité: Assurer la sécurité des données (protection
contre la perte, la destruction, l'accès non autorisé).

Responsabilité: Le responsable de traitement doit être capable de démontrer sa
conformité à tous ces principes.

Les 6 Bases Légales (Article 6) Pour être licite, un traitement doit reposer
sur l'une de ces 6 bases:

- Le consentement: La personne a donné son accord explicite pour une ou
plusieurs finalités spécifiques.

- Le contrat: Le traitement est nécessaire à l'exécution d'un contrat avec la
personne (ex: une vente en ligne).

- L'obligation légale: Le traitement est imposé par une loi (ex: obligations
comptables).

- La sauvegarde des intérêts vitaux: Le traitement est nécessaire pour sauver
la vie de quelqu'un.

- La mission d'intérêt public: Le traitement est effectué par une autorité
publique dans le cadre de sa mission.

- L'intérêt légitime: Le traitement est nécessaire aux fins des intérêts
légitimes poursuivis par le responsable du traitement, à condition que les
intérêts ou les libertés et droits fondamentaux de la personne ne prévalent
pas (ex: sécurité des systèmes, analyse statistique non intrusive).

Les Droits des Personnes. Le RGPD confère des droits forts aux individus:
- Droit à l'information (Art. 13 et 14): Le droit de savoir quelles données
sont collectées et pourquoi.

- Droit d'accès (Art. 15): Le droit de demander une copie de ses données.

- Droit de rectification (Art. 16): Le droit de faire corriger des données
inexactes.

- Droit à l'effacement ou "droit à l'oubli" (Art. 17): Le droit de demander la
suppression de ses données.

- Droit à la limitation du traitement (Art. 18): Le droit de "geler"
l'utilisation des données dans certains cas.

- Droit à la portabilité (Art. 20): Le droit de récupérer ses données dans un
format structuré et de les transmettre à un autre service.

- Droit d'opposition (Art. 21): Le droit de s'opposer à certains traitements
(notamment ceux basés sur l'intérêt légitime ou le marketing direct).

Les Obligations du Responsable de Traitement:

- Privacy by Design & by Default (Art. 25): Intégrer la protection des données
dès la conception du projet et appliquer par défaut les paramètres les plus
protecteurs.

- Sécurité du traitement (Art. 32): Mettre en œuvre des mesures techniques et
organisationnelles pour protéger les données.

- Notification de violation de données (Art. 33 et 34): Obligation de notifier
l'autorité de contrôle (la CNIL en France) et parfois les personnes concernées
en cas de faille de sécurité.

- Analyse d'Impact relative à la Protection des Données (AIPD) (Art. 35):
Obligation de mener une analyse des risques pour les traitements susceptibles
d'engendrer un risque élevé pour les droits et libertés des personnes.

- Désignation d'un Délégué à la Protection des Données (DPO) (Art. 37):
Obligatoire pour les organismes publics et certaines entreprises privées.
_________________________________________________________________________

Rappel: Les points fondamentaux concernant la réglementation RGPD sont
détaillés dans une section à part de la documentation.

Dans le cas de notre application lourde, l’ensemble de la réglementation RGPD
ne peut s’appliquer. Cette dernière concerne avant tout les applications web ou
la donnée est particulièrement présente, et sont pour la plupart, des données
utilisateurs, certaines sensibles comme l’adresse mail, le numéro de téléphone,
les mots de passe, etc.

ICAS ne traitant pas de données utilisateurs, notamment sensibles, une grande
partie de la réglementation ne peut donc pas s’appliquer. Cependant certains
points d’attention sont à retenir.

 1. Gestion de l’adresse IP

**Contexte**: L'applique va se connecter à internet, pour des mise à jours, pour 
vérifier la licence commerciale (s’il y en a), pour rapport de potentiels bugs
/ erreurs, pour faire des requêtes API (requêtes météo, etc).

L’adresse IP de l’utilisateur va alors être nécessairement exposée.

**La réglementation RGPD**: La jurisprudence européenne a confirmé qu’une
adresse IP dynamique est une donnée personnelle, car elle peut, en la croisant
avec des informations détenues par le fournisseur d'accès à internet, permettre
d'identifier la personne.

**Notre obligation légal**: Informer l'utilisateur que son adresse IP est
collectée (par ex. dans une politique de confidentialité) et justifier ce
traitement sur une base légale (souvent "l'intérêt légitime" pour assurer la
sécurité du service ou fournir des mises à jour).

2. Gestion des identifiants uniques (Machine ID, User ID, Installation ID)

**Contexte**: Une application lourde sur ordinateur génère un identifiant unique
lorsqu’elle est installée. Cet identifiant permet de distinguer une instance
de l'application d'une autre.

**La réglementation RGPD**: Même s'il s’agit d’un pseudonyme (une suite de
chiffres et de lettres), cet identifiant est rattaché à une machine, et donc
indirectement à un utilisateur. Il permet de "singulariser" un individu et de
suivre son comportement au sein de l'application. Il s'agit donc
indirectement d’un traitement de données.

**Notre obligation légal**: Informer l'utilisateur de la génération de cet
identifiant, de sa finalité (ex: analyse statistique, gestion des erreurs) et
de la durée de conservation des données qui y sont associées, s' il y a
conservation.

3. Les journaux d'erreurs (Crash Logs) et fichiers de log

**Contexte**: L'application pourrait proposer aux utilisateurs d’envoyer des
données à nos serveurs concernant de potentiels rapports d’erreurs et de
plantages (crashs).

**La réglementation RGPD**: Ces rapports contiennent des informations tel que
l'adresse IP, l'identifiant unique de l'installation, mais aussi des
informations système comme le nom de l'ordinateur (DESKTOP-SOMEONE) ou le nom
d'utilisateur de la session Windows / Linux / macOS (C:\Users\Someone\).

**Notre obligation légale**: Demander le consentement de l'utilisateur avant
l'envoi du rapport (dans le cas contraire ne rien envoyer), lui montrer ce qui
va être envoyé, anonymiser et supprimer un maximum d'informations personnelles
ou sensibles.

4. Gestion des licences

**Contexte**: Dans le cas où notre application est payante, la clé de licence
est souvent liée à un achat, et donc à un nom, une entreprise ou un email
stocké dans votre système de vente.

**La réglementation RGPD**: Le processus de validation de la licence relie
l'utilisation de l'application (via son identifiant unique) à un acheteur
identifié.

**Notre obligation légale**: Le traitement est basé sur l'exécution d'un
contrat (la vente de la licence), il nous est donc nécessaire d’informer
clairement l'utilisateur sur ce processus dans la documentation officielle.
