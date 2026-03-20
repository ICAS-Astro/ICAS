# Déployement & résilience

Deployment & Migration Strategy:

**CI/CD**:
- Github action

**Migration**:
- N/A

###Resilience & Continuity:

**SPOF (Single Point of Failure)**:

Aucun élément ne peut causer le non fonctionnement complet de l’application.
La validation de la licence peut être effectué hors ligne et lors de la mise à
jour de l’application pour être non bloquante.

**Backups**:
Une copie du contenu de la base de donné peut être effectué et envoyé hors site
à une fréquence journalière. Le code de l’application est synchronisé par
github. Les artefacts de build peuvent être mis en backup sur un S3 (et peuvent
être régénéré à tout moment).

- **Degraded Mode**: 
- N/A for web site
- Basic functionalities on the desktop app if any network
