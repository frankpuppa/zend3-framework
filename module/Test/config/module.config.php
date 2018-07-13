<?php
namespace Test;
use Zend\Router\Http\Segment;
use Zend\ServiceManager\Factory\InvokableFactory;


return [
    'controllers' => [
        'factories' => [
            Controller\TestController::class => InvokableFactory::class,
        ],
    ],
    'router' => [
        'routes' => [
            'test' => [
                'type'    => Segment::class,
                'options' => [
                    'route' => '/test',
                    // 'constraints' => [
                    //     'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                    //     'id'     => '[0-9]+',
                    // ],
                    'verb' => 'get',
                    'defaults' => [
                        'controller' => Controller\TestController::class,
                        'action'     => 'index',
                    ],
                ],
            ],
            'lala' => [
                'type'    => Segment::class,
                'options' => [
                    'route' => '/lala',
                    // 'constraints' => [
                    //     'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                    //     'id'     => '[0-9]+',
                    // ],
                    'verb' => 'get',
                    'defaults' => [
                        'controller' => Controller\TestController::class,
                        'action'     => 'lala',
                    ],
                ],
            ],
        ],
    ],
    'view_manager' => [
        'template_path_stack' => [
            'Test' => __DIR__ . '/../view',
        ],
    ],
];
?>