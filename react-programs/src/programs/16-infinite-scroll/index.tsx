/**
 * PROGRAM 16 — Infinite Scroll
 *
 * Load posts from the API below, 10 at a time.
 * Automatically load the next page when the user scrolls to the bottom.
 *
 * API: GET https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10
 *      (increment _page for subsequent loads)
 *
 * Requirements:
 *   - Display each post as a card with its title and body
 *   - Show a "Loading..." indicator at the bottom while fetching
 *   - Show "No more posts" when all posts are loaded
 *   - Use IntersectionObserver to detect when the user reaches the bottom
 */

export default function InfiniteScroll() {
  return <div />;
}
