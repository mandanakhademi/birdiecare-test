import * as dotenv from 'dotenv';
import * as request from 'supertest';
import app from '../src/application'

describe('Event controller', () => {
    beforeEach(() => {
        dotenv.config();
    });

    it('should get all the recepients ', async () => {
        // Arrange
        const expectedResponse = ["ad3512a6-91b1-4d7d-a005-6f8764dd0111", "df50cac5-293c-490d-a06c-ee26796f850d", "e3e2bff8-d318-4760-beea-841a75f00227"];

        // Action
        await request(app)
            .get('/careRecipiets')
            // Assert
            .expect(200)
            .expect(res => {
                expect(res.body).toEqual(expectedResponse);
            });
    })

    it('should get visits for a valid recepioent', async () => {
        // Arrange
        const recepientId = "ad3512a6-91b1-4d7d-a005-6f8764dd0111";
        const fromDate = "2019-05-09";
        const toDate = "2019-05-10";

        // Action
        await request(app)
            .get('/visits?id=' + recepientId + '&from=' + fromDate + '&to=' + toDate)
            // Assert
            .expect(200)
            .expect(res => {
                expect(res.body.length).toEqual(6);
                expect(res.body[0].id).toEqual("4401d558-cad8-4fcc-b936-4bd7586b5728");
                expect(res.body[1].id).toEqual("81343cc8-75e0-485f-a658-656b79bcbb4e");
                expect(res.body[2].id).toEqual("31dc1e5a-ea72-4d41-a4da-b84fb0c71878");
                expect(res.body[3].id).toEqual("a51f1803-7ff2-497a-af5b-eec6c3044df7");
                expect(res.body[4].id).toEqual("aaa82c82-5eeb-44d4-be79-4d1834f618d3");
                expect(res.body[5].id).toEqual("30a1ced4-22a2-446f-89f3-7b3fbd84063b");
            });
    })

    it('should get no visits for an invalid recepioent', async () => {
        // Arrange
        const invalidRecepientId = "ad3512a6-22a2-446f-a005-6f8764dd0111";
        const fromDate = "2019-05-09";
        const toDate = "2019-05-10";

        // Action
        await request(app)
            .get('/visits?id=' + invalidRecepientId + '&from=' + fromDate + '&to=' + toDate)
            // Assert
            .expect(200)
            .expect(res => {
                expect(res.body.length).toEqual(0);
            });
    })
});