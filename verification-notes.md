## Feature verification

The browser preview renders the Code cortex/TAM-VIT identity, exposes a header button labeled “PLAY SOUND / ORIGINAL SIREN MIX,” and updates it to “ON AIR / ORIGINAL SIREN MIX” with a pause hint after activation. The nomination section appears between Tracks and the event archive with four vote buttons and percentage feedback. The desktop hero remains dinosaur-free and keeps the 30 Hours / One Idea / Zero Limits copy.
## Interactive scroll verification

The preview remained usable after scrolling through the About sections with the fixed header in place. The browser’s extracted content confirms the nomination cards are present and exposed as buttons with current percentages. The music toggle remains in its ON AIR state while navigating the page.
## Poll viewport verification

The page scrolls cleanly through the VIT and TAM-VIT story cards toward the Tracks and nomination content. The fixed header keeps the ON AIR control visible while the content moves beneath it, and the poll remains represented as four selectable controls in the page structure.
## Interaction result

The music button successfully changes from PLAY SOUND to ON AIR after activation, with the accessible hint changing to Pause event music. Selecting the first nomination changes its label to YOUR PICK, increments its vote count from 86 to 87, disables repeat voting, and changes the footer message to “Your nomination is locked in. Let the room decide.”
## Auth drawer verification

The upgraded preview loads the participant access drawer from the header. The drawer presents TEAM ID and PASSWORD fields, SIGN IN action, and a separate registration switch. The compact header also exposes ADMIN beside TEAM LOGIN, while the underlying Code cortex hero remains visible and dimmed behind the drawer.
## Registration-mode verification

The participant drawer switches from login to registration and exposes TEAM ID, TEAM NAME, and PASSWORD fields with a REGISTER TEAM action. The page remains visually intact behind the drawer and the five current track labels are present in the page structure.
## Top tray verification

The current preview shows the enlarged raised tray clearly separated from the hero. Clicking the music control changes the visible label from OFF to ON, updates its accessible hint to Turn music off, and changes the button to the active cyan state.
## Tray interaction verification

The enlarged tray is visually distinct on the desktop preview. The music button toggled from OFF to ON with active-state styling, and the TEAM LOGIN button opened the participant drawer without disturbing the underlying page composition.
## Admin tray verification

The raised tray keeps the ADMIN button distinct and clickable. Activating it opened the owner-access drawer, which correctly explains the existing TAM-VIT owner-role sign-in flow and presents the continue button without collecting a separate admin password.
## Final tray verification

The ADMIN control opened the owner-access panel successfully, and the MENU control opened the coral navigation panel with the full anchor list. The enlarged tray controls remain distinct and interactive after the restyle.
## Event cover, socials, and menu-icon verification

The supplied Data Alchemy photo is uploaded at `/manus-storage/data-alchemy-cover_5c835fc4.webp`. The provided TAM Instagram destination redirects to an Instagram login wall but preserves the requested profile URL; the GitHub destination resolves to `github.com/Tam`; and LinkedIn resolves to the provided TAM Systems company URL. The preview exposes the new TAM social links with accessible labels and renders the Data Alchemy cover in the archive card.
## Scrollable menu and floating icon verification

The live preview opens the full-screen navigation tray with the per-item icons visibly rendered in navy beside Home, About, Tracks, Nominate, Gallery, Sponsors, FAQs, and Contact. The tray now owns vertical overflow and uses a sticky footer treatment so the menu can be scrolled independently on short viewports. The icons have staggered float timing and reduced-motion overrides disable the non-essential movement.
## Scrollable tray verification

The open menu tray was independently scrolled in the live preview. The content moves within the coral fixed tray while the page behind it remains unchanged; the navigation rows retain their navy icons and heading alignment. The icon float animation is configured with staggered delays, and the reduced-motion media query disables it.
## TAM 3D mascot verification

The supplied TAM mascot GLB renders in the center of the pre-scroll hero on desktop and mobile. Its canvas is layered behind the hero copy, includes a subtle halo, and uses pointer-driven interpolation for the mascot’s head-facing motion. The mascot is hidden after the page scroll state becomes active, with a reduced-motion-safe fallback and a wireframe placeholder while the asset loads.
The live preview loaded the supplied TAM mascot into a centered hero canvas. A pointer move across the pre-scroll hero was issued while the mascot was visible, exercising the smoothed head-target rotation. Touch/coarse-pointer mode is configured to keep a static idle pose instead of tracking pointer input.
A live browser pointer move at the top of the hero changed the mascot’s head-facing pose. After scrolling one viewport down, the hero mascot left the visible composition while the page continued into the About section, confirming the requested pre-scroll-only presentation.
Music-control refinement verification: desktop hero shows the amber angular control with waveform and parenthetical OFF label; mobile hero keeps the angular control legible across the top edge without crowding the TAM lockup or menu button. The cursor tracer is intentionally absent from static screenshots until pointer movement occurs.
Music control and cursor tracer verification: the live desktop preview renders the supplied angular amber silhouette with a waveform and parenthetical OFF label. Moving the browser pointer produced the blue tracer dot with a soft halo at the pointer location while leaving page interaction intact. Static mobile layout keeps the control legible; the tracer is disabled for coarse pointers and reduced-motion users.
