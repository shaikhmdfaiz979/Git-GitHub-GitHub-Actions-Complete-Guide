const lessons = {
  setup: {
    title: "Create your first repository",
    description: "A repository is a project folder that Git tracks. Initialise Git to start recording your project's history.",
    code: "mkdir my-project\ncd my-project\ngit init",
    tip: "<strong>Remember:</strong> <code>git init</code> creates the local Git repository. It does not upload anything to GitHub."
  },
  save: {
    title: "Save a checkpoint",
    description: "Stage the changes you want to save, then create a commit. A commit is a named checkpoint in your project history.",
    code: "git status\ngit add README.md\ngit commit -m \"Add project README\"",
    tip: "<strong>Helpful habit:</strong> Run <code>git status</code> often. It shows which files are changed, staged, or untracked."
  },
  branch: {
    title: "Work on a separate branch",
    description: "A branch lets you work on a feature without changing the main branch until you are ready to merge.",
    code: "git switch -c feature/my-change\n# Edit your files and commit\ngit switch main\ngit merge feature/my-change",
    tip: "<strong>Tip:</strong> Replace <code>feature/my-change</code> with a short name describing your work."
  },
  remote: {
    title: "Connect your project to GitHub",
    description: "Create an empty repository on GitHub, then add its URL as a remote and push your local main branch.",
    code: "git remote add origin https://github.com/USERNAME/REPOSITORY.git\ngit branch -M main\ngit push -u origin main",
    tip: "<strong>Important:</strong> Replace USERNAME and REPOSITORY with your own values. Authenticate using a supported GitHub sign-in method."
  }
};

const tabs = document.querySelectorAll(".command-tab");
const title = document.getElementById("commandTitle");
const description = document.getElementById("commandDescription");
const code = document.getElementById("commandCode");
const tip = document.getElementById("commandTip");
const copyCommand = document.getElementById("copyCommand");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    const lesson = lessons[tab.dataset.tab];
    title.textContent = lesson.title;
    description.textContent = lesson.description;
    code.textContent = lesson.code;
    tip.innerHTML = lesson.tip;
    copyCommand.textContent = "Copy code";
  });
});

async function copyText(text, button) {
  try {
    await navigator.clipboard.writeText(text);
    button.textContent = "Copied!";
  } catch (error) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    textarea.remove();
    button.textContent = copied ? "Copied!" : "Select code to copy";
  }
  window.setTimeout(() => {
    button.textContent = button.dataset.originalLabel || "Copy code";
  }, 1800);
}

copyCommand.addEventListener("click", () => {
  copyCommand.dataset.originalLabel = "Copy code";
  copyText(code.textContent, copyCommand);
});

const copyWorkflow = document.getElementById("copyWorkflow");
copyWorkflow.addEventListener("click", () => {
  copyWorkflow.dataset.originalLabel = "Copy YAML";
  copyText(document.getElementById("workflowCode").textContent, copyWorkflow);
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
