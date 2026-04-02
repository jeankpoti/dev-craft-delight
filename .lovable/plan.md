

## Split Projects into Websites and Mobile Apps Tabs

### Approach
Use the existing `Tabs` component (from `@radix-ui/react-tabs`) to split the projects section into two tabs: **Websites** and **Mobile Apps**.

### Classification
- **Mobile Apps**: MathGenie AI (featured), Work Snap, Snap Animal AI
- **Websites**: TaskMaate AI, Snap Animal Landing, Adllee (if desired — currently not listed)

### Changes

**`src/components/Projects.tsx`**:
1. Import `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent` from `@/components/ui/tabs`.
2. Add a `category` field to each project: `"mobile"` or `"website"`.
3. Replace the current layout with a `Tabs` wrapper defaulting to `"mobile"`.
4. Each tab content renders the same card grid layout as today — the featured project (MathGenie) stays as the hero card within the Mobile Apps tab.
5. Keep all existing styling, hover effects, and animations.

### Technical Details
- `Tabs defaultValue="mobile"` with two `TabsTrigger` values: `"mobile"` and `"websites"`.
- Filter projects by category for each `TabsContent`.
- Featured project logic only applies within the mobile tab.
- No new files or dependencies needed.

