<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CourseSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('courses')->insert([
            [
                'title' => 'Algorithme for beginner',
                'description' => 'Learn to solve problems efficiently and optimize processes with algorithms for smarter computing.',
                'level' => 1,
                'duration' => 320,
                'language' => 'English',
                'user_id' => 1,
                'type' => 'PL',
                'youtube_url' => 'https://www.youtube.com/watch?v=8hly31xKli0',
                'pdf_detail' => 'algorithme_detail.pdf',
                'pdf_resume' =>'pdfs/algorithme_resume.pdf',
                'steps' => <<<'EOT'
(00:00:00) Introduction to Algorithms

(1:57:44) Introduction to Data Structures

(4:11:02) Algorithms: Sorting and Searching
EOT,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Learn HTML Basics',
                'description' => 'Master the foundation of web development using HTML.',
                'level' => 1,
                'duration' => 60,
                'language' => 'English',
                'user_id' => 1,  // Ensure this user ID corresponds to a valid formateur
                'type' => 'PL',
                'youtube_url' => 'https://www.youtube.com/watch?v=HD13eq_Pmp8',
                'pdf_detail' => 'html_detail.pdf',
                'pdf_resume' => 'pdfs/html_resume.pdf',
                'steps' => <<<'EOT'
(00:00:00) Tutoriel HTML pour débutants

(00:09:40) Hyperliens

(00:12:41) Images

(00:16:30) Audio

(00:19:10) Vidéo

(00:21:37) Formatage du texte

(00:23:42) Listes

(00:28:18) Tableaux

(00:32:16) Couleurs

(00:35:56) Span & Div

(00:38:07) Balises méta

(00:42:03) Iframes

(00:45:59) Boutons

(00:51:06) Formulaires
EOT,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'CSS for Beginners',
                'description' => 'Learn to style and structure web pages with CSS for a visually appealing design.',
                'level' => 2,
                'duration' => 60,
                'language' => 'English',
                'user_id' => 1,
                'type' => 'PL',
                'youtube_url' => 'https://www.youtube.com/watch?v=wRNinF7YQqQ',
                'pdf_detail' => 'css_detail.pdf',
                'pdf_resume' => 'pdfs/css_resume.pdf',
                'steps' => <<<'EOT'
(00:00:00) Tutoriel CSS pour débutants

(00:11:00) Polices

(00:14:20) Frontières

(00:16:56) Arrière-plan

(00:20:52) Marges

(00:25:44) Flotteur

(00:29:01) Position n°7

(00:34:58) Pseudo classes

(00:40:47) Ombres

(00:43:43) Icônes

(00:46:45) Transformation

(00:50:54) Animation
EOT,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Bootstrap for Beginners',
                'description' => 'Learn to create responsive and mobile-friendly web designs effortlessly with Bootstrap.',
                'level' => 2,
                'duration' => 70,
                'language' => 'English',
                'user_id' => 1,
                'type' => 'PL',
                'youtube_url' => 'https://www.youtube.com/watch?v=Jyvffr3aCp0',
                'pdf_detail' => 'bootstrap_detail.pdf',
                'pdf_resume' => 'pdfs/bootstrap_resume.pdf',
                'steps' => <<<'EOT'
(00:00:00) Introduction

(00:00:35) Setup

(00:02:00) Containers & Breakpoint Basics

(00:05:37) Columns

(00:14:06) Rows

(00:17:36) Tables

(00:22:46) Form Basics

(00:28:11) Input Groups

(00:30:52) Floating Labels

(00:32:25) Form Validation

(00:36:05) Buttons

(00:40:28) Alerts

(00:42:36) Cards

(00:46:35) Modals

(00:52:00) Collapse

(00:54:20) Navbars

(01:00:20) Color Utilities

(01:03:00) Stack Utilities

(01:04:13) Border Utilities

(01:06:13) Display Utilities

(01:07:12) Spacing Utilities

(01:08:36) Flexbox Utilities
EOT,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Python Essentials',
                'description' => 'A complete guide to Python for beginners.',
                'level' => 1,
                'duration' => 60,
                'language' => 'English',
                'user_id' => 1,
                'type' => 'PL',
                'youtube_url' => 'https://www.youtube.com/watch?v=kqtD5dpn9C8',
                'pdf_detail' => 'python_detail.pdf',
                'pdf_resume' => 'pdfs/python_resume.pdf',
                'steps' => <<<'EOT'
(00:00:00) Introduction

(00:00:30) What You Can Do With Python

(00:01:15) Your First Python Program

(00:05:30) Variables

(00:09:08) Receiving Input

(00:10:48) Type Conversion

(00:18:49) Strings

(00:23:41) Arithmetic Operators

(00:25:59) Operator Precedence

(00:27:11) Comparison Operators

(00:28:52) Logical Operators

(00:31:06) If Statements

(00:36:16) Exercise

(00:41:42) While Loops

(00:45:11) Lists

(00:48:47) List Methods

(00:52:16) For Loops

(00:54:54) The range() Function

(00:57:43) Tuples
EOT,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Javascript Essentials',
                'description' => 'Learn to bring interactivity and functionality to web pages with JavaScript for a dynamic user experience.',
                'level' => 1,
                'duration' => 48,
                'language' => 'English',
                'user_id' => 1,
                'type' => 'PL',
                'youtube_url' => 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
                'pdf_detail' => 'javascript_detail.pdf',
                'pdf_resume' => 'pdfs/javascript_resume.pdf',
                'steps' => <<<'EOT'
(00:00) Qu'est-ce que JavaScript

(04:41) Configuration de l'environnement de développement

(07:52) JavaScript dans les navigateurs

(11h41) Séparation des préoccupations

(13:47) JavaScript dans le nœud

(16:11) Variables

(21:49) Constantes

(23h35) Types primitifs

(26:47) Saisie dynamique

(30:06) Objets

(35:22) Tableaux

(39:41) Fonctions

(44:22) Types de fonctions
EOT,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'PHP',
'description' => 'Learn to create dynamic and interactive web applications with PHP for powerful backend development.',
'level' => 1,
'duration' => 240,
'language' => 'English',
'user_id' => 1,
'type' => 'PL',
'youtube_url' => 'https://www.youtube.com/watch?v=zZ6vybT1HQs',
'pdf_detail' => 'php_detail.pdf',
'pdf_resume' => 'pdfs/php_resume.pdf',
'steps' => <<<'EOT'
    (00:00:00) PHP tutorial for beginners
    (00:02:17) XAMPP Server setup
    (00:04:18) VSCode setup
    (00:05:10) Create necessary files on XAMPP server
    (00:05:51) Validate PHP executable path
    (00:07:09) VSCode extensions
    (00:07:58) Access XAMPP dashboard
    (00:08:26) Creating a PHP script
    (00:09:17) Live Server extension
    (00:11:13) echo
    (00:11:52) comments
    (00:12:49) Generate HTML template
    (00:13:58) Variables and data types
    (00:28:02) Arithmetic
    (00:34:38) $_GET and $_POST
    (00:46:20) Math functions
    (01:00:27) If statements
    (01:10:49) Logical operators
    (01:21:05) Switches
    (01:29:48) For loops
    (01:36:45) While loops
    (01:41:47) Arrays
    (01:49:49) Associative arrays
    (02:01:09) isset() & empty()
    (02:11:38) Radio buttons
    (02:21:02) Checkboxes
    (02:27:40) functions
    (02:36:29) string functions
    (02:44:30) sanitize/validate input
    (02:52:33) include()
    (02:59:23) $_COOKIE
    (03:04:57) $_SESSION
    (03:16:47) $_SERVER
    (03:22:28) password hashing
    (03:26:07) PHP Connect to MySQL database
    (03:34:57) PHPMyAdmin create a table
    (03:39:07) PHP insert into MySQL database
    (03:45:00) PHP query MySQL database
    (03:49:37) PHP registration form project
EOT,

               
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Communication de Base en Français',
                'description' => 'Apprenez à saluer, poser des questions simples et vous présenter en français.',
                'level' => 1,
                'duration' => 240, 
                'language' => 'Français',
                'user_id' => 1,
                'type' => 'L',
                'youtube_url' => 'https://youtu.be/Ikxxvv22qWc', // Replace with actual video if available
                'pdf_detail' => 'communication_base_detail.pdf',
                'pdf_resume' => 'pdfs/communication_base_resume.pdf',
                'steps' => <<<'EOT'
            (00:00:00) Salutations
            (00:03:00) Se présenter
            (00:07:00) Poser des questions simples
            (00:12:00) Exercice pratique
            EOT,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Écriture de Paragraphes',
                'description' => 'Apprenez à structurer des paragraphes clairs et cohérents en français à l’aide de connecteurs logiques et d’exemples concrets.',
                'level' => 1,
                'duration' => 20, 
                'language' => 'Français',
                'user_id' => 1,
                'type' => 'L',
                'youtube_url' => 'https://youtu.be/MEf8oQXG-OE', // à remplacer si tu as une vraie vidéo
                'pdf_detail' => 'ecriture_paragraphes_detail.pdf',
                'pdf_resume' => 'pdfs/ecriture_paragraphes_resume.pdf',
                'steps' => <<<'EOT'
            (00:00:00) Structure d’un paragraphe
            (00:04:00) Connecteurs logiques utiles
            (00:08:00) Exemple de paragraphe simple
            (00:13:00) Conseils pratiques
            (00:17:00) Exercice suggéré
            EOT,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Grammaire et Conjugaison',
                'description' => 'Renforcez votre base en grammaire française : articles, pronoms, conjugaison des verbes réguliers et irréguliers.',
                'level' => 1,
                'duration' => 405, 
                'language' => 'Français',
                'user_id' => 1,
                'type' => 'L',
                'youtube_url' => 'https://www.youtube.com/watch?v=1Er8c6xikcA&list=PLuT0u2X0m8iVrb9daJ4kZf_UDYgYKmCFi', // à changer avec le lien réel si tu l’as
                'pdf_detail' => 'grammaire_conjugaison_detail.pdf',
                'pdf_resume' => 'pdfs/grammaire_conjugaison_resume.pdf',
                'steps' => <<<'EOT'
            (00:00:00) Les articles définis et indéfinis
            (00:05:00) Les pronoms personnels sujets
            (00:10:00) Conjugaison au présent des verbes réguliers
            (00:17:00) Verbes irréguliers : Être, Avoir, Aller
            EOT,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Communication Avancée',
                'description' => 'Maîtrisez l’art de la conversation avancée en français dans des contextes professionnels et sociaux complexes.',
                'level' => 2,
                'duration' => 300, 
                'language' => 'Français',
                'user_id' => 1,
                'type' => 'L',
                'youtube_url' => 'https://www.youtube.com/watch?v=-tjCzDp9yJQ&list=PLNdttfDSnqlohsrTQhJnQ8syLzS_nBBJf', // à modifier si tu as un vrai lien
                'pdf_detail' => 'communication_avancee_detail.pdf',
                'pdf_resume' => 'pdfs/communication_avancee_resume.pdf',
                'steps' => <<<'EOT'
            (00:00:00) Introduction aux techniques de conversation avancées
            (00:07:00) Exprimer une opinion et débattre
            (00:15:00) Comprendre et répondre à des sujets techniques
            (00:22:00) Écoute active et réponses pertinentes
            EOT,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Écriture Structurée',
                'description' => 'Apprenez à rédiger des essais bien structurés et à organiser vos idées pour produire des textes convaincants.',
                'level' => 2,
                'duration' => 17, 
                'language' => 'Français',
                'user_id' => 1,
                'type' => 'L',
                'youtube_url' => 'https://www.youtube.com/watch?v=HZURshZkZXo&pp=ygUZIEVjcml0dXJlIFN0cnVjdHVyZSBlbiBmcg%3D%3D', // Change-le si tu as un vrai lien
                'pdf_detail' => 'ecriture_structuree_detail.pdf',
                'pdf_resume' => 'pdfs/ecriture_structuree_resume.pdf',
                'steps' => <<<'EOT'
            (00:00:00) Introduction à la rédaction structurée
            (00:05:00) Construire une introduction efficace
            (00:12:00) Organiser les paragraphes de développement
            (00:20:00) Connecteurs logiques et types de textes
            (00:27:00) Rédiger une conclusion pertinente
            EOT,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Grammaire Avancée et Conjugaison',
                'description' => 'Maîtrisez les subtilités de la grammaire française et perfectionnez votre usage des temps composés et des verbes complexes.',
                'level' => 2,
                'duration' => 11, 
                'language' => 'Français',
                'user_id' => 1,
                'type' => 'L',
                'youtube_url' => 'https://youtu.be/66DapPuV38c', 
                'pdf_detail' => 'grammaire_avancee_detail.pdf',
                'pdf_resume' => 'pdfs/grammaire_avancee_resume.pdf',
                'steps' => <<<'EOT'
            (00:00:00) Introduction à la grammaire avancée
            (00:06:00) Les temps composés : structure et usage
            (00:14:00) Conjugaisons irrégulières courantes
            (00:22:00) Verbes pronominaux et réfléchis
            (00:32:00) L’accord des temps dans les subordonnées
            EOT,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Basic Communication',
                'description' => 'Learn how to greet, ask simple questions, and introduce yourself in English.',
                'level' => 1,
                'duration' => 20,
                'language' => 'anglais',
                'user_id' => 1,
                'type' => 'L',
                'youtube_url' => 'https://youtu.be/WQ4MaTlbg4o', 
                'pdf_detail' => 'basic_communication_detail.pdf',
                'pdf_resume' => 'pdfs/basic_communication_resume.pdf',
                'steps' => <<<'EOT'
            (00:00:00) Introduction
            (00:01:00) Greetings
            (00:05:00) Introducing Yourself
            (00:10:00) Asking Simple Questions
            (00:18:00) Practice and Review
            EOT,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Grammar and Conjugation',
                'description' => 'Learn the basics of English grammar and how to conjugate common verbs.',
                'level' => 1,
                'duration' => 9,
                'language' => 'anglais',
                'user_id' => 1,
                'type' => 'L',
                'youtube_url' => 'https://youtu.be/6LFjVC3cHjI', 
                'pdf_detail' => 'grammar_conjugation_detail.pdf',
                'pdf_resume' => 'pdfs/grammar_conjugation_resume.pdf',
                'steps' => <<<'EOT'
            (00:00:00) Introduction
            (00:02:00) Basic Grammar Rules
            (00:08:00) Conjugating Regular Verbs
            (00:12:00) Irregular Verbs
            (00:18:00) Practice Exercises
            EOT,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Writing Paragraphs',
                'description' => 'Learn how to structure a simple paragraph and write short texts.',
                'level' => 1,
                'duration' => 8,
                'language' => 'anglais',
                'user_id' => 1,
                'type' => 'L',
                'youtube_url' => 'https://youtu.be/2_pZWdF7ujA', 
                'pdf_detail' => 'writing_paragraphs_detail.pdf',
                'pdf_resume' => 'pdfs/writing_paragraphs_resume.pdf',
                'steps' => <<<'EOT'
            (00:00:00) Introduction
            (00:02:00) Structure of a Paragraph
            (00:08:00) Writing the Introduction
            (00:12:00) Adding Details and Examples
            (00:18:00) Conclusion and Finalizing
            EOT,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Advanced Communication',
                'description' => 'In this module, you will enhance your communication skills by learning how to express complex ideas clearly. You will practice discussing a variety of topics, giving presentations, and engaging in debates.',
                'level' => 2,
                'duration' => 5,
                'language' => 'English',
                'user_id' => 1,
                'type' => 'L',
                'youtube_url' => 'https://youtu.be/CAU2zx2Ri_M', 
                'pdf_detail' => 'advanced_communication_detail.pdf',
                'pdf_resume' => 'pdfs/advanced_communication_resume.pdf',
                'steps' => <<<'EOT'
            (00:00:00) Introduction to Advanced Communication
            (00:03:00) Building Advanced Vocabulary
            (00:10:00) Practicing Pronunciation and Tone
            (00:18:00) Handling Complex Discussions
            (00:25:00) Presentation Techniques
            EOT,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Advanced Grammar and Conjugation',
                'description' => 'This module delves into complex grammatical structures such as conditional and subjunctive moods, as well as passive and active voice in advanced contexts. You will also learn to conjugate irregular and advanced verbs in different tenses.',
                'level' => 2,
                'duration' => 14,
                'language' => 'English',
                'user_id' => 1,
                'type' => 'L',
                'youtube_url' => 'https://youtu.be/BaX7xwa8Vh4', 
                'pdf_detail' => 'advanced_grammar_detail.pdf',
                'pdf_resume' => 'pdfs/advanced_grammar_resume.pdf',
                'steps' => <<<'EOT'
            (00:00:00) Introduction to Advanced Grammar
            (00:03:00) Mastering the Subjunctive and Conditional Tenses
            (00:10:00) Perfect and Past Perfect Tenses in Complex Sentences
            (00:18:00) Using Passive Voice and Indirect Speech
            (00:25:00) Advanced Verb Conjugation in All Forms
            EOT,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Essay and Structured Writing',
                'description' => 'In this module, you will learn how to write well-structured essays on various topics. You will focus on organizing your thoughts, creating clear arguments, and ensuring coherence in your writing.',
                'level' => 2,
                'duration' => 17,
                'language' => 'English',
                'user_id' => 1,
                'type' => 'L',
                'youtube_url' => 'https://youtu.be/GNL1_tNTqpw', 
                'pdf_detail' => 'structured_writing_detail.pdf',
                'pdf_resume' => 'pdfs/structured_writing_resume.pdf',
                'steps' => <<<'EOT'
            (00:00:00) Introduction to Essay and Structured Writing
            (00:03:00) Creating a Strong Thesis and Supporting Arguments
            (00:10:00) Organizing Essays Using Clear Paragraph Structures
            (00:18:00) Writing Persuasive and Argumentative Essays
            (00:25:00) Polishing Writing for Clarity and Coherence
            EOT,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'PyCharm IDE',
                'description' => 'PyCharm is a professional IDE from JetBrains, designed specifically for Python developers. It enhances productivity with intelligent code assistance, debugging, testing, and more.',
                'level' => 0,
                'duration' => 25,
                'language' => 'English',
                'user_id' => 1,
                'type' => 'IDE',
                'youtube_url' => 'https://youtu.be/BPC-bGdBSM8',  // Example URL
                'pdf_detail' => 'pycharm_detail.pdf',
                'pdf_resume' => 'pdfs/pycharm_resume.pdf',
                'steps' => <<<'EOT'
                    (00:00:00) Introduction to PyCharm
                    (00:02:30) Installation and Setup
                    (00:06:00) Exploring Key Features
                    (00:12:00) Useful Shortcuts
                    (00:17:00) Simple Python Project Example
                    (00:22:00) Tips & Tricks
            EOT,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Visual Studio IDE',
                'description' => 'Visual Studio is a powerful IDE from Microsoft used to build applications in C#, .NET, C++, Python, and more.',
                'level' => 0,
                'duration' => 30,
                'language' => 'English',
                'user_id' => 1,
                'type' => 'IDE',
                'youtube_url' => 'https://youtu.be/YMBGZz8z-0w',  // Example URL
                'pdf_detail' => 'visual_studio_detail.pdf',
                'pdf_resume' => 'pdfs/visual_studio_resume.pdf',
                'steps' => <<<'EOT'
                    (00:00:00) Getting Started with Visual Studio
                    (00:03:00) Installation and Configuration
                    (00:08:00) Key Features Overview
                    (00:15:00) Shortcut Essentials
                    (00:20:00) Creating a C# Console Project
                    (00:27:00) Pro Tips & Tricks
            EOT,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'VS Code IDE',
                'description' => 'Visual Studio Code is a free, lightweight, and powerful source-code editor developed by Microsoft, with support for multiple languages and an active extension ecosystem.',
                'level' => 0,
                'duration' => 20,
                'language' => 'English',
                'user_id' => 1,
                'type' => 'IDE',
                'youtube_url' => 'https://youtu.be/SYRwSyjD8oI',  // Example URL
                'pdf_detail' => 'vscode_detail.pdf',
                'pdf_resume' => 'pdfs/vscode_resume.pdf',
                'steps' => <<<'EOT'
                    (00:00:00) What is VS Code?
                    (00:01:30) Installation Walkthrough
                    (00:05:00) Key Features You Should Know
                    (00:10:00) Time-Saving Shortcuts
                    (00:14:00) Build a Simple HTML+JS Project
                    (00:18:00) Tips, Themes, and Extensions
            EOT,
                'created_at' => now(),
                'updated_at' => now(),
            ]
            ]);
         }
        }