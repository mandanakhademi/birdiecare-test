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
});