# Page Spec: /developers/api

## Page Objective
Give developers a complete, technically accurate overview of the Imagine REST API — its design, authentication model, versioning strategy, and core endpoint groups. Establish trust in the API's quality before a developer reads the full reference docs.

## Audience
- Backend and frontend engineers evaluating API quality and integration effort
- Technical leads doing due diligence on platform reliability and design
- Solution architects mapping the API surface to their existing systems

## Key Message
The Imagine API is designed with the same care as the products it powers — clean resource naming, predictable behaviour, consistent error shapes, and a versioning model that doesn't break your integration on every release.

---

## Section Flow

### 1. Hero

**Heading:** A well-designed API for every layer of the platform.

**Subheading:** RESTful, versioned, and documented with full OpenAPI specs. Build against the render engine, configuration engine, product catalog, and experience layer — all through a single, consistent interface.

**Base URL callout (code block):**
```
Base URL:  https://api.imagine.so/v1
Auth:      Bearer token (API key or short-lived JWT)
Format:    JSON
Versioning: URL path — /v1/
```

**CTAs:**
- Primary: View Full API Reference
- Secondary: Get API Key

---

### 2. API Design Principles

**Heading:** Designed to be obvious.

Four principles, each with a short description:

**Predictable resource naming**
Every endpoint follows a consistent noun-first pattern. `/v1/products`, `/v1/renders`, `/v1/configurations`. No surprises in the URL structure.

**Consistent error shapes**
Every error response returns the same JSON structure with `code`, `message`, and an optional `details` array. Your error handling logic works across every endpoint.

**Idempotent writes where it matters**
POST requests to `/v1/renders` accept an optional `idempotency_key`. Submit the same request twice — get the same response. No duplicate renders, no duplicate charges.

**Pagination that works**
All list endpoints use cursor-based pagination. Pass `after` and `limit` query parameters. Response includes a `next_cursor` and `has_more` boolean.

---

### 3. Authentication

**Heading:** Two authentication modes.

**API Key (server-side):**
Generated from the Imagine dashboard. Pass in the `Authorization` header. Never expose in client-side code.

```http
GET /v1/products HTTP/1.1
Host: api.imagine.so
Authorization: Bearer sk_live_4f8a...
```

**JWT (client-side / short-lived):**
Exchange your API key for a scoped, short-lived JWT via `/v1/auth/token`. Use this in browser or mobile contexts. Tokens expire after 1 hour.

```javascript
// Server: generate a client token
const { token } = await imagine.auth.createClientToken({
  scope: ['renders:write', 'products:read'],
  expiresIn: '1h',
});

// Client: initialize SDK with short-lived token
const imagine = new Imagine({ token });
```

---

### 4. Core Endpoint Groups

**Heading:** Four endpoint groups. One platform.

**`/v1/renders`**
Trigger and retrieve photorealistic render jobs. Accepts product ID, configuration object, scene preset, and output format. Returns a signed CDN URL on completion.

Endpoints:
- `POST /v1/renders` — Create a render job
- `GET /v1/renders/:id` — Get render status and result
- `GET /v1/renders` — List renders for a product or session

**`/v1/configurations`**
Validate and persist product configurations. Check that a given combination of options is valid before triggering a render or adding to cart.

Endpoints:
- `POST /v1/configurations/validate` — Validate a configuration object
- `POST /v1/configurations` — Save a named configuration
- `GET /v1/configurations/:id` — Retrieve a saved configuration

**`/v1/products`**
Read the product catalog — options, rules, pricing modifiers, and available scenes.

Endpoints:
- `GET /v1/products` — List all products
- `GET /v1/products/:id` — Get product detail with full option tree
- `GET /v1/products/:id/options` — Get options and constraints for a product

**`/v1/experiences`**
Create and manage shareable configured product experiences — shareable links, embeds, and saved states.

Endpoints:
- `POST /v1/experiences` — Create a shareable experience
- `GET /v1/experiences/:id` — Retrieve experience state
- `PATCH /v1/experiences/:id` — Update experience configuration

---

### 5. Example: Create a Render

**Heading:** A render call, end to end.

**Request:**
```http
POST /v1/renders HTTP/1.1
Host: api.imagine.so
Authorization: Bearer sk_live_4f8a...
Content-Type: application/json

{
  "product_id": "sofa-alto-xl",
  "configuration": {
    "fabric": "boucle-ivory",
    "legs": "walnut",
    "dimensions": "W240 D95 H78"
  },
  "scene": "living-room-natural-light",
  "output": {
    "format": "jpg",
    "width": 2400,
    "height": 1600
  },
  "idempotency_key": "order_7f3a_render_1"
}
```

**Response (202 Accepted):**
```json
{
  "id": "ren_8x2kqp4m",
  "status": "processing",
  "product_id": "sofa-alto-xl",
  "created_at": "2026-03-11T09:14:22Z",
  "estimated_completion_ms": 3200,
  "webhook_url": null
}
```

**Completed render (GET /v1/renders/ren_8x2kqp4m):**
```json
{
  "id": "ren_8x2kqp4m",
  "status": "complete",
  "image_url": "https://cdn.imagine.so/renders/ren_8x2kqp4m.jpg",
  "completed_at": "2026-03-11T09:14:25Z",
  "duration_ms": 3141
}
```

---

### 6. Rate Limits

**Heading:** Rate limits by plan.

| Plan       | Requests / minute | Renders / hour | Burst |
|------------|-------------------|----------------|-------|
| Starter    | 60                | 200            | 120   |
| Growth     | 300               | 2,000          | 600   |
| Scale      | 1,000             | Unlimited      | 2,000 |
| Enterprise | Custom            | Custom         | Custom|

Rate limit headers returned on every response:
```
X-RateLimit-Limit: 300
X-RateLimit-Remaining: 247
X-RateLimit-Reset: 1710150000
```

---

### 7. Error Handling

**Heading:** Errors that explain themselves.

Every error response uses the same shape:

```json
{
  "error": {
    "code": "configuration_invalid",
    "message": "The option 'fabric' value 'velvet-midnight' is not available for product 'sofa-alto-xl'.",
    "details": [
      {
        "field": "configuration.fabric",
        "issue": "option_unavailable",
        "allowed_values": ["boucle-ivory", "boucle-chalk", "linen-stone"]
      }
    ]
  }
}
```

**Common error codes:**
- `authentication_failed` — Invalid or expired token
- `configuration_invalid` — One or more option values are invalid for the product
- `product_not_found` — No product matching the given ID
- `render_quota_exceeded` — Hourly render limit reached
- `idempotency_conflict` — Idempotency key reused with different parameters

---

### 8. Footer CTA

**Heading:** Start building against the API.

**CTAs:**
- Primary: View Full API Reference
- Secondary: Install the SDK

---

## Copy Notes
- Every code block should be real and runnable, not illustrative pseudocode.
- Error codes should feel like something an engineer would actually search for.
- Rate limit table should be scannable — developers look for this early in evaluation.

## Design Notes
- Persistent left-nav on this page linking to endpoint groups
- Request/response code blocks shown in a split or tabbed view
- Rate limit table rendered as a proper comparison table, not a list
