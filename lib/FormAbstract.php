<?php

/**
 * Created by PhpStorm.
 * User: artem
 * Date: 18.05.17
 * Time: 19:28
 */
abstract class FormAbstract
{
    public $formType;

    public function __construct(string $formType)
    {
        $this->formType = $formType;
    }

    abstract public function validate();

    abstract public function send();

    abstract public function getForm();

}