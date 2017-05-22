<?php

/**
 * Created by PhpStorm.
 * User: Кайзер
 * Date: 18.05.2017
 * Time: 20:54
 */
require_once('CallbackForm.php');


class OrderForm extends CallbackForm
{
    public $email;

    public function __construct(string $formType, string $name, string $phone, string $email)
    {
        parent::__construct($formType, $name, $phone);
        $this->email = $email;
    }


    public function validate(): bool
    {
        if (parent::validate()) {
            if (empty($this->email) || preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/", $this->email)) {
                return true;
            }
        }
    }

    public function send()
    {
        parent::send();
        echo "<br>";
        if ($_POST["email"]) {
            echo "E-mail : " . $this->email;
        }
    }

    public function getForm()
    {
        parent::getForm();
    }
}