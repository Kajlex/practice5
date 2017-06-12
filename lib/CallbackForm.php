<?php


require_once('FormAbstract.php');

class CallbackForm extends FormAbstract
{
    public $name;
    public $phone;

    public function __construct(string $formType, string $name, string $phone)
    {
        parent::__construct($formType);
        $this->name = $name;
        $this->phone = $phone;
    }

    public function validate(): bool
    {
        if (empty($this->name) || iconv_strlen($this->name) > 20 || iconv_strlen($this->name) < 2) {
            return false;
        }
        if (empty($this->phone) || strlen($this->phone) < 7 || strlen($this->phone) > 12) {
            return false;
        }
        return true;
    }

    public function send()
    {
        echo 'Name: ' . $this->name;
        echo '<br>';
        echo 'Phone: ' . $this->phone;
    }

    public function getForm()
    {
        if ($this->validate()) {
            $this->send();
        } else {
            echo "Введите корректные данные" . "<br>";
        }
    }
}
