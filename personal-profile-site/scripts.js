const $ = (selector) => document.querySelector(selector);

function setText(selector, text) {
  const element = $(selector);
  if (element) element.textContent = text;
}

function setLink(selector, href) {
  const element = $(selector);
  if (element) element.href = href;
}

function createTag(text) {
  const tag = document.createElement("span");
  tag.className = "tag";
  tag.textContent = text;
  return tag;
}

function renderSkills(skills) {
  const grid = $("#skillsGrid");
  grid.replaceChildren(
    ...skills.map((skill) => {
      const article = document.createElement("article");
      article.className = "skill-card";
      const title = document.createElement("h3");
      title.textContent = skill.title;
      const list = document.createElement("div");
      list.className = "tag-list";
      skill.items.forEach((item) => list.append(createTag(item)));
      article.append(title, list);
      return article;
    }),
  );
}

function renderProjects(projects) {
  const grid = $("#projectGrid");
  grid.replaceChildren(
    ...projects.map((project) => {
      const article = document.createElement("article");
      article.className = "project-card";

      const media = document.createElement("div");
      media.className = "project-media";
      const video = document.createElement("video");
      video.controls = true;
      video.preload = "metadata";
      video.poster = project.poster;
      const source = document.createElement("source");
      source.src = project.video;
      source.type = "video/mp4";
      video.append(source);
      video.append("Your browser does not support the video tag.");
      media.append(video);

      const body = document.createElement("div");
      body.className = "project-body";
      const title = document.createElement("h3");
      title.textContent = project.title;
      const description = document.createElement("p");
      description.textContent = project.description;
      const tags = document.createElement("div");
      tags.className = "tag-list";
      project.tech.forEach((tech) => tags.append(createTag(tech)));
      const link = document.createElement("a");
      link.className = "text-link";
      link.href = project.github;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = "View GitHub repository";
      body.append(title, description, tags, link);

      article.append(media, body);
      return article;
    }),
  );
}

function renderBlogPosts(posts) {
  const grid = $("#blogGrid");
  grid.replaceChildren(
    ...posts.map((post) => {
      const article = document.createElement("article");
      article.className = "blog-card";

      const media = document.createElement("div");
      media.className = "blog-media";
      if (post.video) {
        const video = document.createElement("video");
        video.controls = true;
        video.preload = "metadata";
        video.poster = post.image;
        const source = document.createElement("source");
        source.src = post.video;
        source.type = "video/mp4";
        video.append(source);
        video.append("Your browser does not support the video tag.");
        media.append(video);
      } else {
        const image = document.createElement("img");
        image.src = post.image;
        image.alt = post.title;
        media.append(image);
      }

      const body = document.createElement("div");
      body.className = "blog-body";
      const date = document.createElement("p");
      date.className = "blog-date";
      date.textContent = post.date;
      const title = document.createElement("h3");
      title.textContent = post.title;
      const summary = document.createElement("p");
      summary.textContent = post.summary;
      const tags = document.createElement("div");
      tags.className = "tag-list";
      post.tags.forEach((tag) => tags.append(createTag(tag)));
      body.append(date, title, summary, tags);

      if (post.link) {
        const link = document.createElement("a");
        link.className = "text-link";
        link.href = post.link;
        link.target = "_blank";
        link.rel = "noreferrer";
        link.textContent = "Read more";
        body.append(link);
      }

      article.append(media, body);
      return article;
    }),
  );
}

function renderCertificates(certificates) {
  const grid = $("#certificateGrid");
  grid.replaceChildren(
    ...certificates.map((certificate) => {
      const article = document.createElement("article");
      article.className = "certificate-card";

      if (certificate.type === "image") {
        const image = document.createElement("img");
        image.src = certificate.file;
        image.alt = certificate.title;
        article.append(image);
      } else {
        const preview = document.createElement("div");
        preview.className = "pdf-preview";
        preview.textContent = "PDF";
        article.append(preview);
      }

      const title = document.createElement("h3");
      title.textContent = certificate.title;
      const meta = document.createElement("p");
      meta.textContent = `${certificate.issuer} - ${certificate.date}`;
      const link = document.createElement("a");
      link.className = "button small";
      link.href = certificate.file;
      link.download = "";
      link.textContent = "Download";
      article.append(title, meta, link);
      return article;
    }),
  );
}

function renderDocuments(documents) {
  const grid = $("#documentGrid");
  grid.replaceChildren(
    ...documents.map((documentItem) => {
      const article = document.createElement("article");
      article.className = documentItem.primary
        ? "document-card primary-document"
        : "document-card";
      const icon = document.createElement("div");
      icon.className = "document-icon";
      icon.textContent = "PDF";
      const content = document.createElement("div");
      const title = document.createElement("h3");
      title.textContent = documentItem.title;
      const description = document.createElement("p");
      description.textContent = documentItem.description;
      const link = document.createElement("a");
      link.className = "button small";
      link.href = documentItem.file;
      link.download = "";
      link.textContent = "Download";
      content.append(title, description, link);
      article.append(icon, content);
      return article;
    }),
  );
}

function renderContact(data) {
  setText(
    "#contactIntro",
    `For opportunities, collaborations, or interviews, contact me at ${data.email}.`,
  );
  const links = $("#contactLinks");
  const items = [
    { label: "Email", href: `mailto:${data.email}` },
    { label: "GitHub", href: data.github },
    { label: "LinkedIn", href: data.linkedin },
  ];
  links.replaceChildren(
    ...items.map((item) => {
      const link = document.createElement("a");
      link.href = item.href;
      link.textContent = item.label;
      if (!item.href.startsWith("mailto:")) {
        link.target = "_blank";
        link.rel = "noreferrer";
      }
      return link;
    }),
  );
}

function initNavigation() {
  const toggle = $(".nav-toggle");
  const nav = $(".site-nav");
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("open", !expanded);
  });
  nav.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
  });
}

function init() {
  const data = portfolioData;
  document.title = `${data.name} | Portfolio`;
  setText("#brandName", data.name);
  setText("#roleEyebrow", data.role);
  setText("#heroTitle", data.name);
  setText("#heroSummary", data.summary);
  setText("#locationText", data.location);
  setText("#aboutText", data.about);
  setText(
    "#footerText",
    `(c) ${new Date().getFullYear()} ${data.name}. Built for professional applications.`,
  );
  $("#profilePhoto").src = data.photo;
  $("#profilePhoto").alt = `${data.name} portrait`;
  setLink("#githubProfileLink", data.github);
  const primaryDoc =
    data.documents.find((doc) => doc.primary) || data.documents[0];
  if (primaryDoc) setLink("#primaryDocumentLink", primaryDoc.file);

  const highlights = $("#highlightsList");
  highlights.replaceChildren(
    ...data.highlights.map((highlight) => {
      const item = document.createElement("div");
      item.className = "highlight";
      item.textContent = highlight;
      return item;
    }),
  );

  renderSkills(data.skills);
  renderProjects(data.projects);
  renderBlogPosts(data.blogPosts);
  renderCertificates(data.certificates);
  renderDocuments(data.documents);
  renderContact(data);
  initNavigation();
}

init();
