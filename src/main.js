import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Lukas Bernwald",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["Automated Tests", "Code Analysis", "Security Checks", "License Checks"],
    // Which CI/CD tools do you use in your project?
    tools: ["GitHub Actions", "Terraform"],
    // What do you want to learn in this workshop?
    expectations: ["Tips how to test infrastructure", "Jenkins hands-on expereince"],
  },
});
