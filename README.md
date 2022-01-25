# Angular Email Editor

The excellent drag-n-drop email editor by [Unlayer](https://unlayer.com) as a [Angular](https://angular.io/) *wrapper component*. This is the most powerful and developer friendly visual email builder for your app.

Video Overview |
:---: |
[![Angular Email Editor](https://unroll-assets.s3.amazonaws.com/unlayervideotour.png)](https://www.youtube.com/watch?v=MIWhX-NF3j8) |
*Watch video overview: https://youtu.be/MIWhX-NF3j8* |

## Live Demo

Check out the live demo here: https://angular-email-editor-demo.netlify.com/ ([Source Code](https://github.com/unlayer/angular-email-editor/tree/master/src))

## Installation

The easiest way to use Angular Email Editor is to install it from Npm or Yarn and include it in your own Angular build process.

```
npm install @fractalframing/angular-email-editor --save
```

## Usage

Next, you'll need to import the Email Editor module in your app's module.

**app.module.ts**

```ts

import { AngularEmailEditorModule } from '@fractalframing/angular-email-editor';
...

@NgModule({
  ...
  imports: [ AngularEmailEditorModule ],
  ...
});
```

**app.component.ts**

```ts
import { Component, ViewChild } from '@angular/core';
import { AngularEmailEditorComponent } from '@fractalframing/angular-email-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-email-editor';

  @ViewChild(AngularEmailEditorComponent)
  private emailEditor: AngularEmailEditorComponent;
  
  editorLoaded() {
    // load the design json here
    // this.emailEditor.editor.loadDesign({});
  }

  exportHtml() {
    this.emailEditor.editor.exportHtml((data) => console.log('exportHtml', data));
  }
}
```

**app.component.html**

```html
<div class="container">
  <button (click)="exportHtml()">Export</button>
  <angular-email-editor (loaded)="editorLoaded($event)"></angular-email-editor>
</div>
```

### Methods
| method          | params                   | description                                                    |
| --------------- | ------------------------ | -------------------------------------------------------------- |
| **loadDesign**  | `Object data`            | Takes the design JSON and loads it in the editor               |
| **saveDesign**  | `Function callback`      | Returns the design JSON in a callback function                 |
| **exportHtml**  | `Function callback`      | Returns the design HTML and JSON in a callback function        |

See the [example source](https://github.com/unlayer/angular-email-editor/tree/master/src) for a reference implementation.

### Properties

* `minHeight` `String` minimum height to initialize the editor with (default 500px)
* `options` `Object` options passed to the Unlayer editor instance (default {})
* `tools` `Object` configuration for the built-in and custom tools (default {})
* `appearance` `Object` configuration for appearance and theme (default {})
* `projectId` `Integer` Unlayer project ID (optional)
* `loaded` `Function` called when the editor has finished loading

See the [Unlayer Docs](https://docs.unlayer.com/) for all available options.

## Custom Tools

Custom tools can help you add your own content blocks to the editor. Every application is different and needs different tools to reach it's full potential. [Learn More](https://docs.unlayer.com/docs/custom-tools)

[![Custom Tools](https://unroll-assets.s3.amazonaws.com/custom_tools.png)](https://docs.unlayer.com/docs/custom-tools)


## Localization

You can submit new language translations by creating a PR on this GitHub repo: https://github.com/unlayer/translations. Translations managed by [PhraseApp](https://phraseapp.com)

### License

Copyright (c) 2021 Unlayer. [MIT](LICENSE) Licensed.
