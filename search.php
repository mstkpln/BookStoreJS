<?php
// (A) DATABASE CONFIG
define('DB_HOST', 'localhost');
define('DB_NAME', 'test');
define('DB_CHARSET', 'utf8');
define('DB_USER', 'root');
define('DB_PASSWORD', '');

// (B) CONNECT TO DATABASE
try {
  $pdo = new PDO(
    "mysql:host=".DB_HOST.";charset=".DB_CHARSET.";dbname=".DB_NAME,
    DB_USER, DB_PASSWORD, [
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]
  );
} catch (Exception $ex) { exit($ex->getMessage()); }

// (C) SEARCH
$stmt = $pdo->prepare("SELECT * FROM `books` WHERE `title` LIKE ? OR `author` LIKE ?");
//SELECT * FROM books WHERE title LIKE 's%'; [It will return all books which starts from letter "S" in bookname]

// SELECT * FROM books WHERE title LIKE '%s'; [It will return all books which ending with letter "S" in bookname]

// SELECT * FROM books WHERE genre LIKE '%Memoir%'; [It will return all books which belong to "Memoir" in genre]

// SELECT * FROM books WHERE title NOT LIKE '%Non%'; [It will return all books which not containing "Non" in bookname]

$stmt->execute(["%".$_POST['search']."%", "%".$_POST['search']."%"]);
$results = $stmt->fetchAll();
if (isset($_POST['ajax'])) { echo json_encode($results); }