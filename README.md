# CKEditor5 with Nextjs

A Basic Example of CKEditor5 (Classic Editor) with Nextjs13 Page Router You can follow the official documentation [here.](https://ckeditor.com/docs/ckeditor5/latest/installation/integrations/next-js.html "here")

## Run Locally

Clone the project.

```bash
git clone https://github.com/amtulladev/ckeditor5-nextjs.git
```

Go to the project directory

```bash
cd ckeditor5-nextjs
```

Install dependencies

```bash
pnpm install
```

If you get any error in the `CustomEditor.tsx` file on line, `import Editor from "ckeditor5-custom-build."` Run the following code:

```bash
pnpm install file:./ckeditor5
```

Running the application

```bash
pnpm run dev
```

Visit http://localhost:3000 in your browser.

## Deployment

To deploy this project online. Remember to add this to the Install Command.

```bash
cd ckeditor5 && pnpm install && cd ../ && pnpm install
```
