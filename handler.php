<?php

require_once('lib/CallbackForm.php');
require_once('lib/OrderForm.php');


$name = trim($_POST['name']);
$phone = trim($_POST['phone']);
$formType = trim($_POST['formType']);
$email = trim($_POST['email']);

if ($formType == "callback") {
    $form = new CallbackForm($formType, $name, $phone);
    $form->getForm();
} else {
    $form = new OrderForm($formType, $name, $phone, $email);
    $form->getForm();
}

