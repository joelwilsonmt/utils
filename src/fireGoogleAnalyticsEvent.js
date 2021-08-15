export default ({ category = "User", action, label, value, isConversion, noInteraction }) => {
    // console.log("action fired", category, action, label, value)
    if (window?.gtag) {
        window.gtag('event', action, {
            'event_category': category,
            'event_label': label,
            'value': value,
        });
    }
}