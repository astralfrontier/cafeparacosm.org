import markdownit from "markdown-it";
const md = markdownit();

interface GameFile {
  name: string;
  path: string;
}

interface GameEntry {
  name: string;
  description: string;
  img: string;
  files: GameFile[];
}

const GAME_ENTRIES: GameEntry[] = [
  {
    name: "Familiar Faces",
    description:
      md.render(`This is not a complete game! You can use this as a supplement to any tabletop role-playing game.

This is a tool to create interesting supporting characters for games or other stories. It focuses on emotion, motivation, and conflicts.`),
    img: "ewqRfA.png",
    files: [
      {
        name: "Familiar Faces (PDF)",
        path: "familiar-faces.pdf",
      },
    ],
  },
  {
    name: "Pole Stars",
    description:
      md.render(`This is not a complete game! You can use this as a supplement to any tabletop role-playing game.

A pole star is a focal point for character motivations and interactions. They are meant to encourage characters to have a reason to be together and interact, but they may also introduce tension or drama. Pole stars are things a character wants to do something about, or with. Pole stars aren't what your game is "about", but they can be if you want.

Characters will have a position toward a pole star. If you can say "I want to (something) this pole star", or "I am (something) about this pole star", that something is your character's position.`),
    img: "pYNr3h.png",
    files: [
      {
        name: "Pole Stars (PDF)",
        path: "pole-stars.pdf",
      },
    ],
  },
  {
    name: "Silver Seven Field Deployment Guide",
    description:
      md.render(`When you're out in the field fighting supervillains, things can get chaotic. Luckily this guide is here to help you, the player or GM of "Masks: a New Generation", with the following tools:

- Tips on helping new players get going with a starting PC
- Quick NPC generation
- Zero-prep GMing, including quick villain creation
- Running high-octane combats
- Five new Mentors
- Five new Legacies
- Five new Farplanes to visit - or come from
- Over a dozen new villains, including a villain team, the Architects of Evil`),
    img: "jbR0zA.png",
    files: [
      {
        name: "Field Deployment Guide - 72DPI Pages (PDF)",
        path: encodeURI("Field Deployment Guide - 72DPI Pages.pdf"),
      },
      {
        name: "Field Deployment Guide - 72DPI Spreads (PDF)",
        path: encodeURI("Field Deployment Guide - 72DPI Spreads.pdf"),
      },
      {
        name: "Field Deployment Guide - 300DPI Pages (PDF)",
        path: encodeURI("Field Deployment Guide - 300DPI Pages.pdf"),
      },
      {
        name: "Field Deployment Guide - 300DPI Spreads (PDF)",
        path: encodeURI("Field Deployment Guide - 300DPI Spreads.pdf"),
      },
      {
        name: "Silver Seven Field Report - the Invasion (PDF)",
        path: encodeURI("Silver Seven Field Report - the Invasion.pdf"),
      },
    ],
  },
];

interface GameEntryProps {
  entry: GameEntry;
}

function GameEntry(props: GameEntryProps) {
  const { entry } = props;

  return (
    <>
      <div className="grid">
        <div>
          <img src={`/${entry.img}`} />
        </div>
        <div>
          <h2>{entry.name}</h2>
          <div dangerouslySetInnerHTML={{ __html: entry.description }}></div>
          <ul>
            {entry.files.map((file) => (
              <li>
                <a href={`/${file.path}`}>{file.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

function GameListing() {
  return (
    <>
      <h1>Games</h1>
      {GAME_ENTRIES.map((entry) => (
        <GameEntry entry={entry} />
      ))}
    </>
  );
}

export default GameListing;
