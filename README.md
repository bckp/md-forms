# MDForms

## Material Design style for Nette/Forms

This is Material Design style for Nette/Forms, that should made your life easier :)

## Usage

```php
	$form = new Form();

	//Setup renderer
	$renderer = $form->getRenderer();
	$renderer->wrappers['controls']['container'] = null;
	$renderer->wrappers['pair']['container'] = 'div class="material"';
	$renderer->wrappers['label']['container'] = null;
	$renderer->wrappers['control']['container'] = null;

	//Inputs need to have class material
	$form->addText('test', 'Test input')->setAttribute('class', 'material');
```

or more smart solution

```php
	public function createMaterialForm($class = null) {
		$form = new Form();
		if ($this->translator)
			$form->setTranslator($this->translator);
		if ($class)
			$form->getElementPrototype()->class[] = $class;

		# Setup renderer
		$renderer = $form->getRenderer();
		$renderer->wrappers['controls']['container'] = null;
		$renderer->wrappers['pair']['container'] = 'div class=material';
		$renderer->wrappers['label']['container'] = null;
		$renderer->wrappers['control']['container'] = null;

		# Add proper class
		$form->onRender[] = function (Form $form) {
			foreach ($form->getControls() as $control) {
				if ($control instanceof Nette\Forms\Controls\Checkbox)
					$control->setOption('class', 'checkbox');
				elseif ($control instanceof Nette\Forms\Controls\TextBase || $control instanceof Nette\Forms\Controls\ChoiceControl || $control instanceof Nette\Forms\Controls\UploadControl)
					$control->getControlPrototype()->appendAttribute('class', 'material');
			}
		};

		# Return form
		return $form;
	}

	//And then
	$form->addText('test', 'Test input'); //setAttribute is missed here, as onRender will add it automaticly
```