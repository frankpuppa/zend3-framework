<?php
namespace Test\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use Zend\Debug\Debug;

class TestController extends AbstractActionController
{
    public function indexAction()
    {
        return new ViewModel();
    }
     public function reactAction()
    {
    	 // Debug::dump($this);
    // 		$this->_helper->layout->disableLayout();
				// $this->_helper->viewRenderer->setNoRender(TRUE);
        return new ViewModel();
    // 	$view = new \Zend\View\Model\ViewModel();
    // 	$view->setTerminal(true);

    // return $view;
    }
}
?>