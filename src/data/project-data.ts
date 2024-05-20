export type projectProps = {
  projectName: string;
  projectDesc: string;
  projectClient?: string;
  projectClientUrl?: string;
  projectStack: Array<string>;
  projectRole: string;
  projectUrl: string;
  projectRepoUrl?: string;
  projectImageData: ProjectImageDataProps;
  projectCommit: CommitDataProps | undefined | null;
  repoIdentifier?: string;
};

type ProjectImageDataProps = {
  lightSrc: string;
  light64: string;
  darkSrc: string;
  dark64: string;
  alt: string;
};

export type CommitDataProps = {
  repo: string;
  sha: string;
  date: string;
};

export const projects = [
  {
    projectName: 'Apogee',
    projectDesc: 'A feed of planned missions in spaceflight from agencies around the world.',
    projectStack: ['Next.js', 'TypeScript', 'API', 'Vercel'],
    projectRole: 'Design & Development',
    projectUrl: 'https://apogee-spaceflight-tracker.vercel.app/',
    projectRepoUrl: 'https://github.com/AustinChiatto/apogee-spaceflight-tracker',
    repoIdentifier: 'apogee',
    projectImageData: {
      lightSrc: '/images/apogee-thumb.png',
      light64:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAACAAAAADmjFydAAABBElEQVQYGY2PzUoCUQBGz5254fxUmlMiEUkkWKFF0b5Vm+gdeoFo09NEq96jRasYglZhkZuQjGIQitHrKN7rzZVrv9VZHDh84q31YYv5ACEE80xGhXAeb+Y4M5oT5Es7IdMW13FYCjxGSZs0TfF9H2MM5eoBWmuE6+IvCORt3OG184vnOqgJJHfXrCwGaDPBWMHVzT3p5zssr1MIczjZcEAwUtSkotfvTc9LGo06lcomdmLYL2ki+82G98d2ZBFnF5f2MX4myEm6aszq6IvyWhGlhgwyxeHRMd3kB5kL2avXkSXRf6gVpnkzJD8ecHJ6ThQVaTab05qLtYbazi5x/ISubvEPAjJgpqy4HTIAAAAASUVORK5CYII=',
      darkSrc: '/images/apogee-thumb--dark.png',
      dark64:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAACAAAAADmjFydAAAA+klEQVQYGY2NvU7CUACFv/tTqJIaNCow1CbGrUgwcfVRfAHfwyfxPQyLg4vGH4wLhsGkRoUULMWW215xYeZM3zn5kiPCzqmdjD+w1rJOdDyK1vFWjlzRmqAbLR+kg1kskFIQvb9RlhbXdSmKAqd5hGDZHYXJ5uiwe8ZMNWltWb7jnNeXSwLfx5iCKB4TnF+wWxHMjCWJBsiqI5FKIYShWvOQwqHdDgmCg+VDySz94VClbPwmpP8Pj3c3lBWP/nREvb6D0pbhcECSzJHkTK6v6C23OCspFik6y03Pb9YYTMc8Pfc57pywv9fg9v6BTW8bL/tEG4UcfaEp+QMJwGb8vUcNWAAAAABJRU5ErkJggg==',
      alt: 'Screenshot of Apogee website, displaying a grid of rocket images for upcoming launches'
    }
  },
  {
    projectName: 'Market Maestro',
    projectDesc: 'Built from the provided Figma design during my internship at Dovetail Digital.',
    projectClient: 'Dovetail Digital',
    projectClientUrl: 'https://www.dovetaildigital.ca/',
    projectStack: ['Next.js', 'TypeScript', 'Material-UI', 'Vercel'],
    projectRole: 'Front-End Developer',
    projectUrl: 'https://www.marketmaestro.ca',
    projectImageData: {
      lightSrc: '/images/market-maestro-thumb.png',
      light64:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAACAAAAADmjFydAAAA40lEQVQYGYWQvWoCQRSFv/0h49+qJIVikKRI4SukEgRbIQ+TlL5Gau18BLHxAawt0lkEI2xYg1lld2d3nRFcERRPc7kf99xzZ4wwDNPJ94Lu4xPX5EcRcZpQvhMY2nBt8BK3z+D/FnM0PqF8jqTXhlIhY1nCzF0xX//iBQFbGfFaa/C19hCWRbPo0Gk0D6YsYScl9XwRQ+G35xeWvk+req+6lIq6/agsQQO9WSYJwcpFqJfJ2gPCtLAt81D1zJlBg1uygz93KhwH9NfFMe7Pkv77B97Gp+qU+BwO1FoDqU6OQ8keHbpbJfuGOY4AAAAASUVORK5CYII=',
      darkSrc: '/images/market-maestro-thumb--dark.png',
      dark64:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAACAAAAADmjFydAAAA6ElEQVQYGX2OzUrDUBSEv5sf07RNcVFUtAjxzXwI3fkcrnXnUwhuXPoC0tYfqtgiJaXa5P6ZezFBFzqbw5wzM2dEnuf28+iQdPzIX7DJFogAsdkQOdF/YncXZeWGhzc0ZCAijtO9hvJhDVflG4VR7U64So5Vo33k7g6ml2LiiGT6hBoOQUuiZUHnfuJN7Qcbx4SrVb20dMdTdJYRz+c1EwR19watIZk84EyEIQfdDN7XPNsSISUYX+L3B8f8sRbMvhODJvbHFHe3N9edfoZWEqs1i9cXzk5OWRZrtgd9zi8vXBRaK1Sl+AK471jCduVNqAAAAABJRU5ErkJggg==',
      alt: 'Screenshot of Market Maestro website. A tool for managing farmers markets.'
    }
  },
  {
    projectName: 'Code2Image',
    projectDesc: 'A better way to share screenshots of code snippets.',
    projectStack: ['React', 'JavaScript', 'Sass'],
    projectRole: 'Design & Development',
    projectUrl: 'https://crumb.so/code-to-img',
    projectRepoUrl: 'https://github.com/AustinChiatto/crumb',
    repoIdentifier: 'crumb',
    projectImageData: {
      lightSrc: '/images/code2image-thumb.png',
      light64:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAACAAAAADmjFydAAABFElEQVQYGYWQS0oDQRCGv5rumZ7ETIIhETG6EAxuXGTh0pWH8QJexGvoGQQXbo0obhSXEgkiDPGVOI9uexIVdxb81Lv+qpIsyx3/SJqmDIdDut0u8jrN3PhxxHpvDRHheiS8zCDQHgr0t06MY7tZ+eIwUfjLcXCiKJSQJBA3POpQGtjqWI4GJRrnaC53KIqcMIzmBYd7M3qNN1qtlo+F3E1mnKaBHyrooiwxFS8LFuMn1nROPa7h8imlsojNCFXVYNA3z47V+wtudzbZb3eIl+D4wdB++iCKHVH0jg0tJqnN15bPyys3dhusmDHS73Puj54UoFSJ0m5+vPbkiQnYjQXxbz0r7eKzKhB+bPF2tYT1cH/yX+4PXRPDX0p0AAAAAElFTkSuQmCC',
      darkSrc: '/images/code2image-thumb--dark.png',
      dark64:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAACAAAAADmjFydAAABIklEQVQYGX2QzUrDUBCFv9vkmjaNJlbUujBgce3KGnAn7voG6sP4ALpx3+dwq+BKqBQUkYK4NiBi2qpNzI+TKC49MJxhzpy5M1d5nlcopfgPrVaLIAgIwxDV7e4U4csbmxs+w+ENLHRQNSUBQhWXeT4bE78+Y8ZxgmHZRNG4emS2e4bV7lB3oG5LCNtLDnl4y9NxD9N1XdYcl/dJVBnEy+roFO/zXoZMKYqcpLOFvX9Q6eZo9ECWZX8nlIa6zkmjDKehSbIcU9fQ+uvH4Ac9jvxlzqVx0O9jNSDePiSfPqKtgoYlAxbnMUQvYbbvrrj+2MNPHxlIIbk8gZV1DCPD0AhL01x59KQyqGazeaG1KIJyNaPsEJRfXasZv+sWVS1NU74B4gNcIdTjQjsAAAAASUVORK5CYII=',
      alt: 'Screenshot of Code2Image website, a tool to create beautiful images of your code.'
    }
  },
  {
    projectName: 'CSS Grid Tool',
    projectDesc: 'An easier way to visualize your ideal grid layout.',
    projectStack: ['React', 'JavaScript', 'Sass'],
    projectRole: 'Design & Development',
    projectUrl: 'https://crumb.so/grid-tool',
    projectRepoUrl: 'https://github.com/AustinChiatto/crumb',
    repoIdentifier: 'crumb',
    projectImageData: {
      lightSrc: '/images/grid-tool-thumb.png',
      light64:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAACAAAAADmjFydAAAAwElEQVQYGX2QXQrCQAyEJ9ltRQs+We9/FA9Qr9LiU9nun0kWa0FwIZAlmS+T0BZTRcXfNy8zntOE8T6CQoh1WTMuLuHU9wARGuCXQ1JjRb9E4NghFULOBaVqiOAQSkkxNgHXjCAfx9pUdnulfPOUMnzXwWv1evbofIU2KLXkbCJdzXKx8hGbpWVVC9ZjAllEPnTItdYabMLQE8IWZenOmpiNI3hgz5sZeGI8boMTgoSA9UhZrOkRlKk76XS241W8AYTEbu6COhz+AAAAAElFTkSuQmCC',
      darkSrc: '/images/grid-tool-thumb--dark.png',
      dark64:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAACAAAAADmjFydAAAAsklEQVQYGX1PQQ7CQAgctsakPdim0ZvxGX2/37GH9uCh1eyCgKHRmEhgYWFm2KWu64SI8M/6vscwDBjHEdS2rRxOF/AyY10XECUwF6RUoZT8pZNzRrJO2jcOLqKbzHWjCCspbVFVFeq6eROyKisNJMXwmxkhzETsBTtrPO+TnuzKNgjgZx09l2iOZ1Bybgj+ZCObOWqZboCoi3gwsw9NNWpvGEF/fqXH7HcjBCByAO1u8QKvR02GsstHjAAAAABJRU5ErkJggg==',
      alt: 'Screenshot of the Grid Tool website, a tool to visualize CSS grids.'
    }
  },
  {
    projectName: 'Asteroid Run',
    projectDesc: 'Browser game built with a vanilla front-end stack.',
    projectStack: ['JavaScript', 'HTML Canvas', 'CSS'],
    projectRole: 'Design & Development',
    projectUrl: 'https://asteroidrun.crumb.so/',
    projectRepoUrl: 'https://github.com/AustinChiatto/asteroid-run-2.0.0',
    repoIdentifier: 'asteroid',
    projectImageData: {
      lightSrc: '/images/asteroid-run-thumb.png',
      light64:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAACAAAAADmjFydAAAA1ElEQVQYGV1QWU4DMQx9jqehDCp89AcJcf9rcBBU9QZTKJOZZBoH211EeVIcL88rxdg3KFbcY6kJMT5g+7LB1zgj54xaF7y9vuOxZ3zu9uiM/BelZHwfAWZGCB1EKlKacDhOTrslEJETmNc4NdWlQxPNVKRxQq6j68Glitaavopl+VFDMM8Hra6jrtYeu/JuCeawJOaIzfOTj9QgKCUBdKXjfgfSSK0FwzD47FbAcflMv+tA4VxK5OTdbOn/6HTZD3c2I2l3Xd5AFNQWPQT7eKSHMPwCHDJgD4vbCrUAAAAASUVORK5CYII=',
      darkSrc: '/images/asteroid-run-thumb.png',
      dark64:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAACAAAAADmjFydAAAA1ElEQVQYGV1QWU4DMQx9jqehDCp89AcJcf9rcBBU9QZTKJOZZBoH211EeVIcL88rxdg3KFbcY6kJMT5g+7LB1zgj54xaF7y9vuOxZ3zu9uiM/BelZHwfAWZGCB1EKlKacDhOTrslEJETmNc4NdWlQxPNVKRxQq6j68Glitaavopl+VFDMM8Hra6jrtYeu/JuCeawJOaIzfOTj9QgKCUBdKXjfgfSSK0FwzD47FbAcflMv+tA4VxK5OTdbOn/6HTZD3c2I2l3Xd5AFNQWPQT7eKSHMPwCHDJgD4vbCrUAAAAASUVORK5CYII=',
      alt: 'Screenshot of the Asteroid Run game, displaying a player space craft on the start screen'
    }
  }
];
