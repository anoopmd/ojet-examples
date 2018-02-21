define(['ojs/ojcore',
   'text!./view.html',
   './viewModel',
   'text!./component.json',
   'css!./styles',
   'ojs/ojcomposite'],
  function (oj, view, viewModel, metadata) {
    oj.Composite.register('ccdemo-name-badge', {
      metadata: {inline: JSON.parse(metadata)},
      viewModel: {inline: viewModel},
      view: {inline: view}
    });
  }
);