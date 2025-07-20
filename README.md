# GamerZone - Application Laravel

## 📋 Description
GamerZone est une application web Laravel pour la gestion de tournois de jeux vidéo. L'application permet aux administrateurs, organisateurs et joueurs de gérer et participer à des tournois.

## 🚀 Installation et Configuration

### Prérequis
- PHP 8.1+
- Composer
- MySQL (via XAMPP)
- Node.js et npm

### 1. Installation de Laravel
```bash
composer create-project laravel/laravel gamerzone
cd gamerzone
```

### 2. Installation des dépendances
```bash
composer install
npm install
```

### 3. Configuration de l'environnement
```bash
copy .env.example .env
```

Modifier le fichier `.env` pour MySQL :
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=gamerzone
DB_USERNAME=root
DB_PASSWORD=
```

### 4. Génération de la clé d'application
```bash
php artisan key:generate
```

### 5. Installation de Laravel Breeze
```bash
composer require laravel/breeze --dev
php artisan breeze:install
```

### 6. Création de la base de données
- Démarrer XAMPP (MySQL et Apache)
- Créer la base de données `gamerzone` via phpMyAdmin
- Ou utiliser la commande : `mysql -u root -p -e "CREATE DATABASE gamerzone;"`

### 7. Exécution des migrations
```bash
php artisan migrate
```

### 8. Création des modèles, contrôleurs et migrations
```bash
php artisan make:model Role -m
php artisan make:model Tournament -m
php artisan make:model Player -m
php artisan make:controller TournamentController --resource
php artisan make:controller PlayerController --resource
php artisan make:controller AdminController
php artisan make:middleware CheckRole
```

### 9. Création des factories et seeders
```bash
php artisan make:factory RoleFactory
php artisan make:factory TournamentFactory
php artisan make:factory PlayerFactory
php artisan make:seeder DatabaseSeeder
```

### 10. Création de la commande personnalisée
```bash
php artisan make:command CreateTestUser
```

### 11. Compilation des assets
```bash
npm run build
```

### 12. Peuplement de la base de données
```bash
php artisan db:seed
php artisan app:create-test-user
```

### 13. Démarrage du serveur
```bash
php artisan serve
```

## 🔐 Comptes de test

### Administrateur
- **Email**: `admin@gamerzone.com`
- **Mot de passe**: `password123`

### Organisateur
- **Email**: `organizer@gamerzone.com`
- **Mot de passe**: `password123`

### Joueur
- **Email**: `player@gamerzone.com`
- **Mot de passe**: `password123`

## 🛣️ Routes de l'application

### Routes d'authentification
```
GET    /login                    - Page de connexion
POST   /login                    - Traitement de la connexion
POST   /logout                   - Déconnexion
GET    /register                 - Page d'inscription
POST   /register                 - Traitement de l'inscription
```

### Routes principales
```
GET    /                         - Redirection vers le dashboard
GET    /dashboard                - Tableau de bord principal
GET    /profile                  - Profil utilisateur
PATCH  /profile                  - Mise à jour du profil
DELETE /profile                  - Suppression du profil
```

### Routes des tournois
```
GET    /tournaments              - Liste des tournois
GET    /tournaments/create       - Formulaire de création
POST   /tournaments              - Création d'un tournoi
GET    /tournaments/{id}         - Détails d'un tournoi
GET    /tournaments/{id}/edit    - Formulaire d'édition
PUT    /tournaments/{id}         - Mise à jour d'un tournoi
DELETE /tournaments/{id}         - Suppression d'un tournoi
```

### Routes des joueurs
```
GET    /players                  - Liste des joueurs
GET    /players/create           - Formulaire de création
POST   /players                  - Création d'un joueur
GET    /players/{id}             - Détails d'un joueur
GET    /players/{id}/edit        - Formulaire d'édition
PUT    /players/{id}             - Mise à jour d'un joueur
DELETE /players/{id}             - Suppression d'un joueur
```

### Routes d'administration
```
GET    /admin/dashboard          - Tableau de bord administrateur
```

## 🏗️ Structure de la base de données

### Table `users`
- `id` (Primary Key)
- `name` (VARCHAR)
- `email` (VARCHAR, Unique)
- `password` (VARCHAR)
- `created_at`, `updated_at`

### Table `roles`
- `id` (Primary Key)
- `name` (VARCHAR)
- `description` (TEXT)
- `created_at`, `updated_at`

### Table `role_user` (Pivot)
- `user_id` (Foreign Key)
- `role_id` (Foreign Key)

### Table `tournaments`
- `id` (Primary Key)
- `name` (VARCHAR)
- `description` (TEXT)
- `start_date` (DATE)
- `end_date` (DATE)
- `max_participants` (INTEGER)
- `status` (ENUM: upcoming, ongoing, completed, cancelled)
- `created_at`, `updated_at`

### Table `players`
- `id` (Primary Key)
- `user_id` (Foreign Key)
- `tournament_id` (Foreign Key, Nullable)
- `game_username` (VARCHAR)
- `game_type` (VARCHAR)
- `created_at`, `updated_at`

## 👥 Rôles et permissions

### Administrateur
- Accès complet à toutes les fonctionnalités
- Gestion des utilisateurs, tournois et joueurs
- Accès au tableau de bord administrateur

### Organisateur
- Création et gestion des tournois
- Gestion des joueurs
- Accès aux statistiques de base

### Joueur
- Consultation des tournois
- Consultation des autres joueurs
- Pas d'accès aux fonctionnalités de gestion

## 🎨 Interface utilisateur

### Composants principaux
- **Navigation** : Menu principal avec liens vers Dashboard, Tournois, Joueurs
- **Tableau de bord** : Interface adaptée selon le rôle de l'utilisateur
- **Formulaires** : Création et édition de tournois et joueurs
- **Listes** : Affichage des tournois et joueurs avec actions

### Styles
- Framework CSS : Tailwind CSS
- Design responsive
- Boutons colorés selon l'action (Bleu=voir, Jaune=éditer, Rouge=supprimer)

## 🔧 Commandes artisan utiles

```bash
# Générer une clé d'application
php artisan key:generate

# Vider le cache
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear

# Lister les routes
php artisan route:list

# Créer des utilisateurs de test
php artisan app:create-test-user

# Réinitialiser la base de données
php artisan migrate:fresh --seed

# Démarrer le serveur de développement
php artisan serve
```

## 📁 Structure des fichiers

```
gamerzone/
├── app/
│   ├── Console/Commands/
│   │   └── CreateTestUser.php
│   ├── Http/Controllers/
│   │   ├── AdminController.php
│   │   ├── PlayerController.php
│   │   └── TournamentController.php
│   ├── Http/Middleware/
│   │   └── CheckRole.php
│   └── Models/
│       ├── Player.php
│       ├── Role.php
│       ├── Tournament.php
│       └── User.php
├── database/
│   ├── factories/
│   │   ├── PlayerFactory.php
│   │   ├── RoleFactory.php
│   │   └── TournamentFactory.php
│   ├── migrations/
│   │   ├── create_players_table.php
│   │   ├── create_roles_table.php
│   │   ├── create_role_user_table.php
│   │   └── create_tournaments_table.php
│   └── seeders/
│       └── DatabaseSeeder.php
├── resources/views/
│   ├── admin/
│   │   └── dashboard.blade.php
│   ├── players/
│   │   ├── create.blade.php
│   │   ├── edit.blade.php
│   │   ├── index.blade.php
│   │   └── show.blade.php
│   ├── tournaments/
│   │   ├── create.blade.php
│   │   ├── edit.blade.php
│   │   ├── index.blade.php
│   │   └── show.blade.php
│   └── dashboard.blade.php
└── routes/
    └── web.php
```

## 🌐 Accès à l'application

- **URL principale** : `http://127.0.0.1:8000`
- **phpMyAdmin** : `http://localhost/phpmyadmin`

## 📝 Notes importantes

- L'application utilise MySQL via XAMPP
- Tous les formulaires incluent la validation côté serveur
- L'authentification est gérée par Laravel Breeze
- Les permissions sont basées sur les rôles utilisateur
- L'interface est responsive et utilise Tailwind CSS
