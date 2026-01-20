export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="max-w-2xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          DynamicTransition
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          A Swift package for creating beautiful, interactive transitions in iOS apps.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-sm font-mono">
          <span className="text-muted-foreground">Swift Package</span>
        </div>
      </div>
    </main>
  )
}
