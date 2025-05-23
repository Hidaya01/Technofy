<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QuizSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    //Beginner
    {
        DB::table('quizzes')->insert([
            [
                'title' => 'Quiz HTML Basics',
                'type' => 'course',
                'module_id' => null,
                'course_id' => 2, // Assure-toi que ce cours existe
                'question' => 'What does HTML stand for?',
                 'option_a' => 'Hyper Text Markup Language',
                'option_b' => 'Home Tool Markup Language',
                'option_c' => 'Hyperlinks and Text Markup Language',
                'option_d' => 'Hyperlinking Text Management Language',
                'correct_answer' => 'A',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'HTML Basics',
                'type' => 'course',
                'module_id' => null,
                'course_id' => 2,
                'question' => 'What is the correct HTML tag for inserting a line break?',
                'option_a' => '<lb>',
                'option_b' => '<br>',
                'option_c' => '<break>',
                'option_d' => '<line>',
                'correct_answer' => 'B',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'title' => 'HTML Basics',
                'type' => 'course',
                'module_id' => null,
                'course_id' => 2,
                'question' => 'Which HTML tag is used to create a hyperlink?',
                'option_a' => '<link>',
                'option_b' => '<a>',
                'option_c' => '<hyperlink>',
                'option_d' => '<href>',
                'correct_answer' => 'B',
                'created_at' => now(),
                'updated_at' => now()
            ],[
                'title' => 'HTML Basics',
                'type' => 'course',
                'module_id' => null,
                'course_id' => 2,
                'question' => 'Which tag is used to create a paragraph in HTML?',
                'option_a' => '<paragraph>',
                'option_b' => '<text>',
                'option_c' => '<p>',
                'option_d' => '<para>',
                'correct_answer' => 'c',
                'created_at' => now(),
                'updated_at' => now()
            ],[
                'title' => 'HTML Basics',
                'type' => 'course',
                'module_id' => null,
                'course_id' => 2,
                'question' => 'How do you define a level 1 heading in HTML?',
                'option_a' => '<h1>',
                'option_b' => '<title>',
                'option_c' => '<head1>',
                'option_d' => '<heading>1</heading>',
                'correct_answer' => 'A',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'title' => 'HTML Basics',
                'type' => 'course',
                'module_id' => null,
                'course_id' => 2,
                'question' => 'Which tag is used to insert an image?',
                'option_a' => '<picture>',
                'option_b' => '<img>',
                'option_c' => '<image>',
                'option_d' => '<photo>',
                'correct_answer' => 'B',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'title' => 'HTML Basics',
                'type' => 'course',
                'module_id' => null,
                'course_id' => 2,
                'question' => 'What is the current version of HTML?',
                'option_a' => 'HTML 4',
                'option_b' => 'HTML 5',
                'option_c' => 'HTML 6',
                'option_d' => 'HTML 7',
                'correct_answer' => 'B',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'title' => 'HTML Basics',
                'type' => 'course',
                'module_id' => null,
                'course_id' => 2,
                'question' => 'Which tag is used to create an unordered list?',
                'option_a' => '<list>',
                'option_b' => '<ol>',
                'option_c' => '<li>',
                'option_d' => '<ul>',
                'correct_answer' => 'D',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'title' => 'HTML Basics',
                'type' => 'course',
                'module_id' => null,
                'course_id' => 2,
                'question' => 'Which tag defines the body of the HTML document?',
                'option_a' => '<content>',
                'option_b' => '<main>',
                'option_c' => '<body>',
                'option_d' => '<doc>',
                'correct_answer' => 'C',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'title' => 'HTML Basics',
                'type' => 'course',
                'module_id' => null,
                'course_id' => 2,
                'question' => 'How do you create a table in HTML?',
                'option_a' => '<table>',
                'option_b' => '<grid>',
                'option_c' => '<tab>',
                'option_d' => '<tbl>',
                'correct_answer' => 'A',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'title' => 'HTML Basics',
                'type' => 'course',
                'module_id' => null,
                'course_id' => 2,
                'question' => 'Which tag is used to define a form?',
                'option_a' => '<input>',
                'option_b' => '<form>',
                'option_c' => '<submit>',
                'option_d' => '<field>',
                'correct_answer' => 'B',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'title' => 'HTML Basics',
                'type' => 'course',
                'module_id' => null,
                'course_id' => 2,
                'question' => 'How do you define bold text in HTML?',
                'option_a' => '<i>',
                'option_b' => '<strong>',
                'option_c' => '<bold>',
                'option_d' => '<em>',
                'correct_answer' => 'B',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'title' => 'HTML Basics',
                'type' => 'course',
                'module_id' => null,
                'course_id' => 2,
                'question' => 'Which tag is used to create an ordered list?',
                'option_a' => '<ordered>',
                'option_b' => '<ol>',
                'option_c' => '<li>',
                'option_d' => '<ul>',
                'correct_answer' => 'B',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'title' => 'HTML Basics',
                'type' => 'course',
                'module_id' => null,
                'course_id' => 2,
                'question' => 'How do you add a comment in HTML?',
                'option_a' => '//comment',
                'option_b' => '<!--comment-->',
                'option_c' => '/*comment*/',
                'option_d' => '#comment',
                'correct_answer' => 'B',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'title' => 'HTML Basics',
                'type' => 'course',
                'module_id' => null,
                'course_id' => 2,
                'question' => 'Which tag defines the header of an HTML document?',
                'option_a' => '<header>',
                'option_b' => '<top>',
                'option_c' => '<head>',
                'option_d' => '<title>',
                'correct_answer' => 'C',
                'created_at' => now(),
                'updated_at' => now()
            ],

              //Javascript
              [
                'title' => 'JavaScript Fundamentals Quiz',
                'type' => 'course',
                'module_id' => null,
                'course_id' => 6,
                'question' => 'What is the correct way to declare a variable in modern JavaScript?',
                'option_a' => 'new Variable x = 5;',
                'option_b' => 'let x = 5;',
                'option_c' => 'variable x = 5;',
                'option_d' => 'make x = 5;',
                'correct_answer' => 'B',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'JavaScript Fundamentals Quiz',
                'type' => 'course',
                'module_id' => null,
                'course_id' => 6,
                'question' => 'What is the result of the following operation in JavaScript:typeof null?',
                'option_a' => 'undefined',
                'option_b' => 'null',
                'option_c' => 'object',
                'option_d' => 'number',
                'correct_answer' => 'C',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'JavaScript Fundamentals Quiz',
                'type' => 'course',
                'module_id' => null,
                'course_id' => 6,
                'question' => 'What method is used to add an element to the end of an array in JavaScript?',
                'option_a' => 'push()',
                'option_b' => 'append()',
                'option_c' => 'addToEnd()',
                'option_d' => 'insert()',
                'correct_answer' => 'A',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'JavaScript Fundamentals Quiz',
                'type' => 'course',
                'module_id' => null,
                'course_id' => 6,
                'question' => 'How do you define an arrow function in JavaScript?',
                'option_a' => 'function() => {}',
                'option_b' => '=> () {}',
                'option_c' => 'const func => {}',
                'option_d' => 'const func = () => {}',
                'correct_answer' => 'D',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'JavaScript Fundamentals Quiz',
                'type' => 'course',
                'module_id' => null,
                'course_id' => 6,
                'question' => 'What is the main difference between let and var in JavaScript?',
                'option_a' => 'let cannot be reassigned',
                'option_b' => 'var  has block scope',
                'option_c' => 'let  has block scope',
                'option_d' => 'let must always be initialized with a value',
                'correct_answer' => 'C',
                'created_at' => now(),
                'updated_at' => now(),
            ],
          //PHP
          [
            'title' => 'PHP Fundamentals Quiz',
            'type' => 'course',
            'module_id' => null,
            'course_id' => 7,
            'question' => 'What does PHP stand for?',
            'option_a' => 'Personal Home Protocol',
            'option_b' => 'Preprocessed Hypertext Pages',
            'option_c' => 'PHP: Hypertext Preprocessor',
            'option_d' => 'Programming Host Platform',
            'correct_answer' => 'C',
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'title' => 'PHP Fundamentals Quiz',
            'type' => 'course',
            'module_id' => null,
            'course_id' => 7,
            'question' => 'What function is used to start a session in PHP?',
            'option_a' => 'start_session()',
            'option_b' => 'session_begin()',
            'option_c' => 'session_start()',
            'option_d' => 'init_session()',
            'correct_answer' => 'C',
            'created_at' => now(),
            'updated_at' => now(),
        ],

        [
            'title' => 'PHP Fundamentals Quiz',
            'type' => 'course',
            'module_id' => null,
            'course_id' => 7,
            'question' => 'How do you declare a variable in PHP?',
            'option_a' => '#variable',
            'option_b' => '$variable',
            'option_c' => 'var variable',
            'option_d' => '@variable',
            'correct_answer' => 'B',
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'title' => 'PHP Fundamentals Quiz',
            'type' => 'course',
            'module_id' => null,
            'course_id' => 7,
            'question' => 'What PHP function is used to get the length of a string?',
            'option_a' => 'count()',
            'option_b' => 'len()',
            'option_c' => 'length()',
            'option_d' => 'strlen()',
            'correct_answer' => 'D',
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'title' => 'PHP Fundamentals Quiz',
            'type' => 'course',
            'module_id' => null,
            'course_id' => 7,
            'question' => 'How do I include a PHP file within another PHP file?',
            'option_a' => '#include "file.php"',
            'option_b' => 'require "file.php"',
            'option_c' => 'import "file.php"',
            'option_d' => 'load "file.php"',
            'correct_answer' => 'B',
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'title' => 'PHP Fundamentals Quiz',
            'type' => 'course',
            'module_id' => null,
            'course_id' => 7,
            'question' => 'What operator is used for strict comparison in PHP?',
            'option_a' => '==',
            'option_b' => '===',
            'option_c' => '=',
            'option_d' => '!=',
            'correct_answer' => 'B',
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'title' => 'PHP Fundamentals Quiz',
            'type' => 'course',
            'module_id' => null,
            'course_id' => 7,
            'question' => 'What HTTP method is typically used to send sensitive data?',
            'option_a' => 'GET',
            'option_b' => 'POST',
            'option_c' => 'PUT',
            'option_d' => 'HEAD',
            'correct_answer' => 'B',
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'title' => 'PHP Fundamentals Quiz',
            'type' => 'course',
            'module_id' => null,
            'course_id' => 7,
            'question' => 'How do I access data sent via a POST form in PHP?',
            'option_a' => '$POST["name"]',
            'option_b' => '$_POST["name"]',
            'option_c' => '$GET["name"]',
            'option_d' => 'POST["name"]',
            'correct_answer' => 'B',
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'title' => 'PHP Fundamentals Quiz',
            'type' => 'course',
            'module_id' => null,
            'course_id' => 7,
            'question' => 'What function is used to check if a variable is defined in PHP?',
            'option_a' => 'is_defined()',
            'option_b' => 'exists()',   
            'option_c' => 'isset()',
            'option_d' => 'check_var()',
            'correct_answer' => 'C',
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'title' => 'PHP Fundamentals Quiz',
            'type' => 'course',
            'module_id' => null,
            'course_id' => 7,
            'question' => 'How do I connect to a MySQL database in modern PHP?',
            'option_a' => 'mysql_connect()',
            'option_b' => 'mysqli_connect()',
            'option_c' => 'new PDO()',
            'option_d' => 'db_connect()',
            'correct_answer' => 'C',
            'created_at' => now(),
            'updated_at' => now(),
        ],

        //intermediate
           [   
             'title' => 'React Quiz',
            'type' => 'course',
            'module_id' => null,
            'course_id' => 9,
            'question' => 'What is the main function of React in web development?',
            'option_a' => 'Managing databases only',
            'option_b' => 'Creating interactive user interfaces',
            'option_c' => 'Making HTTP requests',
            'option_d' => 'Managing server-side routing',
            'correct_answer' => 'B',
            'created_at' => now(),
            'updated_at' => now(),
           ],
           [   
            'title' => 'React Quiz',
           'type' => 'course',
           'module_id' => null,
           'course_id' => 9,
           'question' => 'What is a React component?',
           'option_a' => 'A CSS file',
           'option_b' => 'A database',
           'option_c' => 'A reusable, independent user interface element',
           'option_d' => 'A configuration file',
           'correct_answer' => 'C',
           'created_at' => now(),
           'updated_at' => now(),
          ],
          [   
            'title' => 'React Quiz',
           'type' => 'course',
           'module_id' => null,
           'course_id' => 9,
           'question' => 'How do you declare a state in a functional React component?',
           'option_a' => 'this.state = {}',
           'option_b' => 'useState()',
           'option_c' => 'setState()',
           'option_d' => 'new State()',
           'correct_answer' => 'B',
           'created_at' => now(),
           'updated_at' => now(),
          ],
          [   
            'title' => 'React Quiz',
           'type' => 'course',
           'module_id' => null,
           'course_id' => 9,
           'question' => 'What is the "Virtual DOM" in React?',
           'option_a' => 'A lightweight copy of the real DOM used to optimize performance',
           'option_b' => 'A ​​virtual browser',
           'option_c' => 'A temporary database',
           'option_d' => 'A type of React component',
           'correct_answer' => 'A',
           'created_at' => now(),
           'updated_at' => now(),
          ],
          [   
            'title' => 'React Quiz',
           'type' => 'course',
           'module_id' => null,
           'course_id' => 9,
           'question' => 'What method is used to perform actions after a component is mounted?',
           'option_a' => 'componentDidMount()',
           'option_b' => 'useEffect(() => {}, [])',
           'option_c' => 'onMount()',
           'option_d' => 'afterMount()',
           'correct_answer' => 'B',
           'created_at' => now(),
           'updated_at' => now(),
          ],
          [   
            'title' => 'React Quiz',
           'type' => 'course',
           'module_id' => null,
           'course_id' => 9,
           'question' => 'How do you pass data from a parent component to a child component?',
           'option_a' => 'With an event',
           'option_b' => 'Through the context',
           'option_c' => 'Through props',
           'option_d' => 'Through the global state',
           'correct_answer' => 'C',
           'created_at' => now(),
           'updated_at' => now(),
          ],
          [   
            'title' => 'React Quiz',
           'type' => 'course',
           'module_id' => null,
           'course_id' => 9,
           'question' => 'What is JSX?',
           'option_a' => 'A separate programming language',
           'option_b' => 'A ​​syntax extension for JavaScript that allows you to write HTML',
           'option_c' => 'A CSS framework',
           'option_d' => 'A build tool',
           'correct_answer' => 'B',
           'created_at' => now(),
           'updated_at' => now(),
          ],
          [   
            'title' => 'React Quiz',
           'type' => 'course',
           'module_id' => null,
           'course_id' => 9,
           'question' => 'What is the useEffect hook used for?',
           'option_a' => 'To manage side effects and the component lifecycle',
           'option_b' => 'To create animations',
           'option_c' => 'To manage routes',
           'option_d' => 'To modify the DOM directly',
           'correct_answer' => 'A',
           'created_at' => now(),
           'updated_at' => now(),
          ],
          [   
            'title' => 'React Quiz',
           'type' => 'course',
           'module_id' => null,
           'course_id' => 9,
           'question' => 'How do you handle events in React?',
           'option_a' => 'With addEventListener',
           'option_b' => 'Using standard HTML attributes',
           'option_c' => 'Using event handlers with camelCase syntax',
           'option_d' => 'Using jQuery',
           'correct_answer' => 'C',
           'created_at' => now(),
           'updated_at' => now(),
          ],
          [   
            'title' => 'React Quiz',
           'type' => 'course',
           'module_id' => null,
           'course_id' => 9,
           'question' => 'What is the difference between a controlled and uncontrolled component?',
           'option_a' => 'Performance',
           'option_b' => 'The controlled component is managed by React via state',
           'option_c' => 'Visual styling',
           'option_d' => 'Code complexity',
           'correct_answer' => 'B',
           'created_at' => now(),
           'updated_at' => now(),
          ],
          //laravel
          [   
            'title' => 'Laravel Quiz',
           'type' => 'course',
           'module_id' => null,
           'course_id' => 8,
           'question' => 'Which Artisan command do you use to create a new controller in Laravel?',
           'option_a' => 'php artisan make:controller',
           'option_b' => 'php artisan new:controller',
           'option_c' => 'php artisan generate:controller',
           'option_d' => 'php artisan create:controller',
           'correct_answer' => 'A',
           'created_at' => now(),
           'updated_at' => now(),
          ],
          [   
            'title' => 'Laravel Quiz',
           'type' => 'course',
           'module_id' => null,
           'course_id' => 8,
           'question' => 'What is the default template system used in Laravel?',
           'option_a' => 'Twig',
           'option_b' => 'Blade',
           'option_c' => 'Smarty',
           'option_d' => 'Vue.js',
           'correct_answer' => 'B',
           'created_at' => now(),
           'updated_at' => now(),
          ],
          [   
            'title' => 'Laravel Quiz',
           'type' => 'course',
           'module_id' => null,
           'course_id' => 8,
           'question' => 'How do you define a GET route in Laravel?',
           'option_a' => 'Route::get("/path", function() {})',
           'option_b' => 'Route::path("/path", function() {})',
           'option_c' => 'Route::create("/path", function() {})',
           'option_d' => 'Route::new("/path", function() {})',
           'correct_answer' => 'A',
           'created_at' => now(),
           'updated_at' => now(),
          ],
          [   
            'title' => 'Laravel Quiz',
           'type' => 'course',
           'module_id' => null,
           'course_id' => 8,
           'question' => 'Which command do you use to run migrations in Laravel?',
           'option_a' => 'php artisan db:migrate',
           'option_b' => 'php artisan migrate:run',
           'option_c' => 'php artisan migrate',
           'option_d' => 'php artisan database:migrate',
           'correct_answer' => 'C',
           'created_at' => now(),
           'updated_at' => now(),
          ],
          [   
            'title' => 'Laravel Quiz',
           'type' => 'course',
           'module_id' => null,
           'course_id' => 8,
           'question' => 'What dependency manager does Laravel use?',
           'option_a' => 'npm',
           'option_b' => 'yarn',
           'option_c' => 'composer',
           'option_d' => 'pip',
           'correct_answer' => 'C',
           'created_at' => now(),
           'updated_at' => now(),
          ],
          [   
            'title' => 'Laravel Quiz',
           'type' => 'course',
           'module_id' => null,
           'course_id' => 8,
           'question' => 'How do you access environment variables in Laravel?',
           'option_a' => 'getenv()',
           'option_b' => 'env()',
           'option_c' => 'config()',
           'option_d' => 'environment()',
           'correct_answer' => 'B',
           'created_at' => now(),
           'updated_at' => now(),
          ],
          [   
            'title' => 'Laravel Quiz',
           'type' => 'course',
           'module_id' => null,
           'course_id' => 8,
           'question' => 'What is the method for creating middleware in Laravel?',
           'option_a' => 'php artisan create:middleware',
           'option_b' => 'php artisan new:middleware',
           'option_c' => 'php artisan generate:middleware',
           'option_d' => 'php artisan make:middleware',
           'correct_answer' => 'D',
           'created_at' => now(),
           'updated_at' => now(),
          ],
          [   
            'title' => 'Laravel Quiz',
           'type' => 'course',
           'module_id' => null,
           'course_id' => 8,
           'question' => "What is Laravel's default ORM?",
           'option_a' => 'Doctrine',
           'option_b' => 'Propel',
           'option_c' => 'Eloquent',
           'option_d' => 'Hibernate',
           'correct_answer' => 'C',
           'created_at' => now(),
           'updated_at' => now(),
          ],
          [   
            'title' => 'Laravel Quiz',
           'type' => 'course',
           'module_id' => null,
           'course_id' => 8,
           'question' => "How do you define a one-to-many relationship in an Eloquent model?",
           'option_a' => 'oneToMany()',
           'option_b' => 'hasMany()',
           'option_c' => 'belongsToMany()',
           'option_d' => 'hasMultiple()',
           'correct_answer' => 'B',
           'created_at' => now(),
           'updated_at' => now(),
          ],
          [   
            'title' => 'Laravel Quiz',
           'type' => 'course',
           'module_id' => null,
           'course_id' => 8,
           'question' => "Which command do you use to create a new migration?",
           'option_a' => 'php artisan migration:create',
           'option_b' => 'php artisan create:migration',
           'option_c' => 'php artisan generate:migration',
           'option_d' => 'php artisan make:migration',
           'correct_answer' => 'D',
           'created_at' => now(),
           'updated_at' => now(),
          ],
          //Node js
          [   
            'title' => 'Laravel Quiz',
           'type' => 'course',
           'module_id' => null,
           'course_id' => 10,
           'question' => "What is Node.js?",
           'option_a' => 'A front-end framework',
           'option_b' => 'A ​​server-side JavaScript runtime environment',
           'option_c' => 'A database management system',
           'option_d' => 'A programming language',
           'correct_answer' => 'B',
           'created_at' => now(),
           'updated_at' => now(),
          ],
          [   
            'title' => 'Laravel Quiz',
           'type' => 'course',
           'module_id' => null,
           'course_id' => 10,
           'question' => "What command is used to install packages with Node.js?",
           'option_a' => 'node install',
           'option_b' => 'npm get',
           'option_c' => 'npm install',
           'option_d' => 'node get',
           'correct_answer' => 'C',
           'created_at' => now(),
           'updated_at' => now(),
          ],
          [   
            'title' => 'Laravel Quiz',
           'type' => 'course',
           'module_id' => null,
           'course_id' => 10,
           'question' => "What object is used to handle incoming HTTP requests in Node.js?",
           'option_a' => 'server',
           'option_b' => 'request',
           'option_c' => 'http',
           'option_d' => 'response',
           'correct_answer' => 'B',
           'created_at' => now(),
           'updated_at' => now(),
          ],
          [
            'title' => 'Node.js Quiz',
            'type' => 'course',
            'module_id' => null,
            'course_id' => 10,
            'question' => "How do I create a basic HTTP server with Node.js?",
            'option_a' => 'http.createConnection()',
            'option_b' => 'server.create()',
            'option_c' => 'http.createServer()',
            'option_d' => 'new Server()',
            'correct_answer' => 'C',
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'title' => 'Node.js Quiz',
            'type' => 'course',
            'module_id' => null,
            'course_id' => 10,
            'question' => "What method is used to read files asynchronously in Node.js?",
            'option_a' => 'fs.readFile()',
            'option_b' => 'fs.read()',
            'option_c' => 'file.read()',
            'option_d' => 'fs.readFileSync()',
            'correct_answer' => 'A',
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'title' => 'Node.js Quiz',
            'type' => 'course',
            'module_id' => null,
            'course_id' => 10,
            'question' => "What is the default package manager for Node.js?",
            'option_a' => 'yarn',
            'option_b' => 'npm',
            'option_c' => 'pip',
            'option_d' => 'composer',
            'correct_answer' => 'B',
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'title' => 'Node.js Quiz',
            'type' => 'course',
            'module_id' => null,
            'course_id' => 10,
            'question' => "How do I access URL parameters in a GET request?",
            'option_a' => 'req.parameters',
            'option_b' => 'req.query',
            'option_c' => 'req.params',
            'option_d' => 'req.getParams',
            'correct_answer' => 'C',
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'title' => 'Node.js Quiz',
            'type' => 'course',
            'module_id' => null,
            'course_id' => 10,
            'question' => "What method is used to export modules in Node.js?",
            'option_a' => 'exports.module',
            'option_b' => 'module.send',
            'option_c' => 'export default',
            'option_d' => 'module.exports',
            'correct_answer' => 'D',
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'title' => 'Node.js Quiz',
            'type' => 'course',
            'module_id' => null,
            'course_id' => 10,
            'question' => "What event is emitted when a client connection is established to a Node.js server?",
            'option_a' => "'connect'",
            'option_b' => "'connection'",
            'option_c' => "'online'",
            'option_d' => "'start'",
            'correct_answer' => 'B',
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'title' => 'Node.js Quiz',
            'type' => 'course',
            'module_id' => null,
            'course_id' => 10,
            'question' => "What is the function of middleware in Express.js?",
            'option_a' => 'Handle errors only',
            'option_b' => 'Process requests before they reach the routes',
            'option_c' => 'Configure the database',
            'option_d' => 'Manage user sessions only',
            'correct_answer' => 'B',
            'created_at' => now(),
            'updated_at' => now(),
        ],
        ]);
    }
}