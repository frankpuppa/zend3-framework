<?php
namespace Test\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
class TestController extends AbstractActionController
{
    public function indexAction()
    {
        return new ViewModel();
    }
     public function lalaAction()
    {
        return new ViewModel();
    }
}
?>