describe("GET /api/health", () => {

    test("Health endpoint should return 200", async () => {

        const { GET } = await import("../app/api/health/route");

        const response = await GET();

        expect(response.status).toBe(200);

    });

    test("Response should contain success=true", async () => {

        const { GET } = await import("../app/api/health/route");

        const response = await GET();

        const body = await response.json();

        expect(body.success).toBe(true);

    });

    test("Response should contain service message", async () => {

        const { GET } = await import("../app/api/health/route");

        const response = await GET();

        const body = await response.json();

        expect(body.service).toBe("Boat Warranty API is running");

    });

    test("Response should contain version", async () => {

        const { GET } = await import("../app/api/health/route");

        const response = await GET();

        const body = await response.json();

        expect(body.version).toBe("1.0.0");

    });

    test("Timestamp should be valid ISO string", async () => {

        const { GET } = await import("../app/api/health/route");

        const response = await GET();

        const body = await response.json();

        expect(Date.parse(body.timestamp)).not.toBeNaN();

    });

});