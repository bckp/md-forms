# MDForms

## Material Design style for Nette/Forms

This is Material Design style for Nette/Forms, that should made your life easier :)

## Usage

```php
    //Setup renderer
    $renderer = $form->getRenderer();
    $renderer->wrappers['controls']['container'] = null;
    $renderer->wrappers['pair']['container'] = 'div class="material"';
    $renderer->wrappers['label']['container'] = null;
    $renderer->wrappers['control']['container'] = null;

    //Inputs need to have class material
    $form->addText('test', 'Test input')->setAttribute('class', 'material');
```