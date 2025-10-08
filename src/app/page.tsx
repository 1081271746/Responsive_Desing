const PartyCard = ({
  title,
  genre,
  people,
  avatars,
}: { title: string; genre: string; people: number; avatars: string[] }) => (
  <div className="flex flex-col gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors cursor-pointer">
    <div className="flex flex-row gap-1">
      {avatars.map((src, i) => (
        <div
          key={i}
          className="w-8 h-8 rounded-full overflow-hidden border-2 border-background"
          style={{ marginLeft: i > 0 ? "-12px" : "0" }}
        >
          <img src={src || "/placeholder.svg"} alt={`User ${i + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
    <div className="flex flex-col gap-1">
      <p className="font-semibold text-sm">{title}</p>
      <p className="text-xs text-muted-foreground">
        {genre} • {people} people
      </p>
    </div>
  </div>
)

const ShowCard = ({ src, title }: { src: string; title: string }) => (
  <div className="flex flex-col gap-2 cursor-pointer group">
    <div className="relative aspect-video rounded-lg overflow-hidden bg-secondary">
      <img
        src={src || "/placeholder.svg"}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <p className="font-semibold text-sm">{title}</p>
  </div>
)

const FriendItem = ({ name, online, index }: { name: string; online: boolean; index: number }) => (
  <div className="flex flex-row gap-3 cursor-pointer hover:bg-secondary/50 p-2 rounded-lg transition-colors">
    <div className="relative">
      <div className="w-10 h-10 rounded-full overflow-hidden bg-secondary">
        <img src={`/friend-${index}.jpg`} alt={name} className="w-full h-full object-cover" />
      </div>
      <span
        className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-card ${online ? "bg-green-500" : "bg-muted"}`}
      />
    </div>
    <div className="flex flex-col gap-0">
      <p className="text-sm font-medium">{name}</p>
      <p className="text-xs text-muted-foreground">{online ? "Online" : "Offline"}</p>
    </div>
  </div>
)

export default function NetflixHome() {
  const parties = [
    {
      title: "Spider-Man: No Way Home",
      genre: "Action",
      people: 2,
      avatars: ["/abstract-geometric-shapes.png", "/abstract-user-icon.png"],
    },
    {
      title: "Into the Spider-Verse",
      genre: "Animation",
      people: 3,
      avatars: ["/diverse-group-brainstorming.png", "/diverse-group-working.png", "/abstract-geometric-shapes.png"],
    },
    {
      title: "The Amazing Spider-Man",
      genre: "Action",
      people: 4,
      avatars: ["/user-6-abstract.png", "/abstract-geometric-shapes.png", "/user-8-profile.png", "/user-9-profile.png"],
    },
    { title: "Spider-Man 2", genre: "Action", people: 3, avatars: ["/user-10.jpg", "/user-11.jpg", "/user-12.jpg"] },
  ]

  const shows = [
    { src: "/spiderman-homecoming.jpg", title: "Spider-Man: Homecoming" },
    { src: "/venom.jpg", title: "Venom" },
    { src: "/morbius.jpg", title: "Morbius" },
    { src: "/spiderverse-2.jpg", title: "Across the Spider-Verse" },
  ]

  const friends = [
    { name: "Peter Parker", online: true },
    { name: "Miles Morales", online: true },
    { name: "Gwen Stacy", online: true },
    { name: "Mary Jane", online: false },
    { name: "Ned Leeds", online: false },
    { name: "Harry Osborn", online: false },
    { name: "Aunt May", online: false },
    { name: "J. Jonah", online: false },
  ]

  return (
    <div className="grid grid-cols-12 gap-0 min-h-screen bg-background text-foreground">
      {/* Left Sidebar */}
      <aside className="col-span-2 flex flex-col gap-8 p-6 bg-card border-r border-border">
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-bold text-primary">Netflix.</h1>
          <nav className="flex flex-col gap-1">
            <button className="flex flex-row gap-3 items-center px-4 py-2 rounded-lg text-primary bg-primary/10 hover:bg-primary/20 transition-colors text-left">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Browse
            </button>
            <button className="flex flex-row gap-3 items-center px-4 py-2 rounded-lg text-muted-foreground hover:bg-secondary/50 transition-colors text-left">
              <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
              Watchlist
            </button>
            <button className="flex flex-row gap-3 items-center px-4 py-2 rounded-lg text-muted-foreground hover:bg-secondary/50 transition-colors text-left">
              <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
              Coming soon
            </button>
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xs uppercase text-muted-foreground font-semibold">Social</h3>
          <nav className="flex flex-col gap-1">
            <button className="flex flex-row gap-3 items-center px-4 py-2 rounded-lg text-muted-foreground hover:bg-secondary/50 transition-colors text-left">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Friends
            </button>
            <button className="flex flex-row gap-3 items-center px-4 py-2 rounded-lg text-muted-foreground hover:bg-secondary/50 transition-colors text-left">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Parties
            </button>
          </nav>
        </div>

        <div className="flex flex-col gap-4 mt-auto">
          <h3 className="text-xs uppercase text-muted-foreground font-semibold">General</h3>
          <nav className="flex flex-col gap-1">
            <button className="flex flex-row gap-3 items-center px-4 py-2 rounded-lg text-muted-foreground hover:bg-secondary/50 transition-colors text-left">
              Settings
            </button>
            <button className="flex flex-row gap-3 items-center px-4 py-2 rounded-lg text-muted-foreground hover:bg-secondary/50 transition-colors text-left">
              Log out
            </button>
          </nav>
        </div>

        <div className="flex flex-col gap-4 p-4 bg-secondary rounded-lg">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-muted">
            <img src="/web-slinger.jpg" alt="Web Slinger" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold">Web Slinger</p>
            <p className="text-xs text-muted-foreground">Level 42</p>
          </div>
          <button className="w-full px-4 py-2 bg-card hover:bg-card/80 rounded-lg text-sm font-medium transition-colors">
            View challenges
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="col-span-8 flex flex-col gap-6 p-6">
        {/* Header */}
        <header className="flex flex-row gap-4">
          <div className="flex flex-row gap-2 basis-1/2">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-secondary/50 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-secondary/50 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="flex flex-row gap-4 basis-1/2">
            <div className="relative basis-full">
              <svg
                className="w-5 h-5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 bg-secondary border-0 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-secondary/50 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-secondary/50 transition-colors relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full" />
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <div
          className="flex flex-col gap-4 p-8 rounded-2xl bg-cover bg-center relative overflow-hidden"
          style={{ backgroundImage: "url('/spiderman-no-way-home-banner.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/20" />
          <div className="relative flex flex-col gap-4 max-w-md">
            <div className="flex flex-row gap-2">
              <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded">4K / Movie</span>
              <div className="flex flex-row gap-1">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full overflow-hidden border-2 border-background"
                    style={{ marginLeft: i > 1 ? "-8px" : "0" }}
                  >
                    <img src={`/friend-${i}.jpg`} alt={`Friend ${i}`} className="w-full h-full object-cover" />
                  </div>
                ))}
                <span className="text-xs ml-2 self-center text-muted-foreground">+3 friends are watching</span>
              </div>
            </div>
            <h2 className="text-5xl font-bold">Spider-Man: No Way Home</h2>
            <div className="flex flex-row gap-2 text-sm text-muted-foreground">
              <span>Last Watch</span>
              <span>•</span>
              <span>2h 28m</span>
            </div>
            <div className="flex flex-row gap-3">
              <button className="flex flex-row gap-2 items-center px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-medium transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-secondary hover:bg-secondary/80 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-secondary hover:bg-secondary/80 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-secondary hover:bg-secondary/80 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="absolute bottom-8 right-8 flex flex-row gap-2">
            <button className="px-4 py-1 bg-secondary hover:bg-secondary/80 rounded-full text-sm font-medium transition-colors">
              2021
            </button>
            <button className="px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
              4K
            </button>
            <button className="px-4 py-1 bg-secondary hover:bg-secondary/80 rounded-full text-sm font-medium transition-colors">
              HDR
            </button>
          </div>
        </div>

        {/* Parties Section */}
        <section className="flex flex-col gap-4">
          <div className="flex flex-row gap-2">
            <h3 className="text-xl font-semibold">Parties</h3>
            <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full self-center">New</span>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {parties.map((party, i) => (
              <PartyCard key={i} {...party} />
            ))}
          </div>
        </section>

        {/* Continue Watching */}
        <section className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Continue watching</h3>
          <div className="grid grid-cols-4 gap-4">
            {shows.map((show, i) => (
              <ShowCard key={i} {...show} />
            ))}
          </div>
        </section>
      </main>

      {/* Right Sidebar - Friends */}
      <aside className="col-span-2 flex flex-col gap-4 p-6 bg-card border-l border-border">
        <div className="flex flex-row gap-2">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-secondary">
            <img src="/peter-parker.jpg" alt="Peter Parker" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-0">
            <p className="text-sm font-semibold">Peter Parker</p>
            <p className="text-xs text-muted-foreground">Level 99</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {friends.map((friend, i) => (
            <FriendItem key={i} {...friend} index={i + 1} />
          ))}
        </div>
      </aside>
    </div>
  )
}
