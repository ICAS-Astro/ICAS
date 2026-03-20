# Backlog

Le projet est une application lourde qui propose aux astronomes et
astrophotographes de contrôler leur instruments (caméra / télescope) tout en
facilitant la gestion des outils informatiques (pilotes externes / applications
tierces).

**Objectifs**

* Concevoir une seule et même application capable de gérer l'ensemble des
  fonctionnalités.

* Rendre l'application accessible pour n'importe quel utilisateur peut importe
  son niveau d'expérience.

* Optimiser et rendre la solution portable entre les différents systèmes
  d'exploitation.

**Contraintes et risques**

- Mise à niveau de la compétition
- Difficultés de développement de modules

## I - Gestion des profils utilisateurs

**Expérience de première utilisation (OOBE)**
> Mettre en place une expérience de première utilisation qui guide
l'utilisateur lors du premier lancement de l'application.

**Gestion du profil utilisateur**
> Permettre la modification du profil utilisateur depuis les paramètres de
l'application.

**Chargement de profils**
> Permettre de charger un ou plusieurs profils utilisateurs simultanément.

## II - Contrôle des instruments

**Gestion des connexions**
> Permettre la gestion et l'état des connexions avec les instruments
d'astrophotographie.

**Contrôle manuel de la monture**
> Permettre à l'utilisateur de piloter manuellement sa monture.

**Pointage automatique**
> Permettre de donner une instruction de pointage automatique vers un objet
céleste.

**Lancement des prises**
> Permettre de lancer des prises d'images depuis l'application.

## III - Données et analyse

**Capteurs des instruments**
> Afficher des informations provenant des instruments tel que la température
pour les caméras CCD.

**Position de la monture**
> Afficher la position de la monture avec latitude et longitude.

**Analyse de la qualité des images**
> Fournir des données sur la qualité des images capturées.

**Analyse de la dérive**
> Analyser et afficher l'évolution de la dérive durant la session.

**Détection d'étoiles**
> Détecter la présence d'étoiles connues dans les images capturées.

## IV - Traitement d'images

**Réduction du bruit**
> Appliquer des algorithmes de réduction du bruit sur les images.

**Empilement d'images**
> Améliorer la précision des images grâce à l'empilement de plusieurs prises.

**Étalonnage des couleurs**
> Permettre l'étalonnage des couleurs des images.

**Déconvolution**
> Appliquer un traitement de déconvolution pour améliorer les détails.

**Amélioration du rendu**
> Améliorer la qualité visuelle finale des images.

## V - Séquenceur de session

**Interface visuelle de programmation**
> Concevoir un éditeur visuel basé sur des blocs imbriquables similaire à
Scratch.

**Interpréteur de séquences**
> Concevoir un interpréteur capable d'exécuter les scripts créés dans le
séquenceur.

**Blocs de base**
> Créer les premiers blocs fonctionnels du séquenceur:
> - Pointer un objet spécifié.
> - Lancer une séquence avec un nombre de poses et de photos.
> - Vérifier le gradient de qualité d'image.
> - Parker la monture
> - Lancer une calibration d'astrométrie.

## VI - Séquenceur de session

**Carte du ciel interactive**
> Proposer une carte du ciel interactive en deux dimensions permettant de
visualiser les objets célestes.

**Analyse des étoiles**
> Analyser la présence d'étoiles dans les images et les comparer avec une carte
du ciel.

**Recalibrage du pointage**
> Calculer la dérive et recalibrer automatiquement le pointage vers l'objet
observé.

## VII - Assistance à la préparation d’observation

**Service météo**
> Fournir des informations météorologiques utiles pour l'observation.

**Recommandation d'objets**
> Aider à choisir un objet céleste en fonction de la période et de la position
géographique.

**Carte de pollution lumineuse**
> Proposer une cartographie interactive de la pollution lumineuse.

## VIII - Gestion des pilotes d'instruments

**Communication avec les instruments**
> Permettre la communication avec les instruments via les protocoles XML et
HTTP.

**Interface avec les drivers**
> Interfacer l'application avec les systèmes de pilotes comme INDILIB et ASCOM.

**Détection de l'environnement**
> Reconnaître le système d'exploitation et l'environnement d'exécution.

**Gestion automatique des pilotes**
> Permettre l'installation, la désinstallation et la mise à jour automatique
des pilotes nécessaires.

## IX - Logiciel embarqué

**Plateformes embarquées**
> Permettre l'exécution sur des plateformes comme Arduino ou Raspberry Pi.

**Contrôle à distance**
> Permettre le contrôle à distance du système embarqué depuis l'application
principale.

**Prise en main en temps réel**
> Permettre la prise de contrôle en temps réel par l'application distante.

**Exécution autonome des scripts**
> Permettre au contrôleur embarqué d'exécuter les scripts du séquenceur
transférés par l'application principale.
