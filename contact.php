<?php
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $organisation = $_POST['organisation'];
  $message = $_POST['message'];

    $email_from = $visitor_email;
    $email_subject = "New Form submission";
    $email_body = "You have received a new message from the user $name at $organisation.\n Here is the message:\n $message";

  $to = "emmakmaxim@gmail.com";
  $headers = "From: $email_from \r\n";
  $headers .= "Reply-To: $visitor_email \r\n";
  mail($to,$email_subject,$email_body,$headers);
 ?>

<!doctype html>
<html lang="en">
  <head>
    <title>Emma Maxim, Front End Developer</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="css/stylesheet-em.css">
  </head>
  <body onload="adjustLinkedInSize()">

    <nav class="navbar navbar-expand-lg navbar-light">
      <a id="em-header" href="index.html">E<span class="em-header-lower">MMA</span> M<span class="em-header-lower">AXIM</span></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link" href="portfolio.html">Portfolio</a>
          <a class="nav-item nav-link" href="resume.html">Resume</a>
          <a class="nav-item nav-link" href="contact.php">Contact</a>
        </div>
      </div>
    </nav>

    <div id="nav-underline1"></div><div id="nav-underline2"></div><div id="nav-underline3"></div>

    <div class="w-screen mx-auto">
      <div class="row">
        <div class="col-10">
          <form action="contact.php" method="post" name="contact-form" onsubmit="return validateForm()" class="contact-form">
            <fieldset>
            <legend>Get in touch</legend>
              <p>If you want to discuss professional opportunities, send me a message using this form. I'd love to connect!</p>
            </fieldset>
            <div class="form-group">
              <label for="name">Name</label>
              <input class="form-control" name="name" id="name">
            </div>
            <div class="form-group">
              <label for="organisation">Organisation</label>
              <input class="form-control" name="organisation" id="organisation">
            </div>
            <div class="form-group">
              <label for="email">Email address</label>
              <input type="email" class="form-control" placeholder="name@example.com" name="email" id="email">
            </div>
            <div class="form-group">
                <label for="message">Message</label>
              <textarea class="form-control" rows="3" name="message" id="message"></textarea>
            </div>
            <button type="submit" class="btn mb-2" name="submit">Submit</button>
          </form>
        </div>
        <div class="col-2">
          <div id="linkedin-container">
            <a href="https://www.linkedin.com/in/emma-maxim-54497965" target="_blank"><img src="images/linkedin.png" alt="The LinkedIn logo"></a>
          </div>
        </div>
      </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

    <script src="main.js"></script>

</body>
</html>
