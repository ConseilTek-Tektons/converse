# Converse security model

## Controls in the reference

- Server-side OIDC sessions and SAML broker guidance
- Configurable RBAC enforced in route handlers
- PostgreSQL transactions for records, workflow events, and audit events
- Private object references with SHA-256 integrity metadata
- Rate limiting and storage-disabled AI requests
- Secret references supplied from cloud secret stores
- CodeQL, dependency audit, container build, database migration, and infrastructure validation in CI

## Production responsibilities

Complete threat modelling, data classification, tenant-isolation testing, backup recovery, key rotation, penetration testing, privacy review, and workload-specific compliance validation before production. Converse does not include a global SMS or push-notification carrier network. External channels remain provider integrations with their own delivery constraints.

Report vulnerabilities privately through GitHub security advisories or email security details to support@conseiltek.com. Do not open a public issue for an unpatched vulnerability.
