import celsiusToFahrenheit from './exo1_pdf';

describe('celsiusToFahrenheit', () => {
    it('should convert 0°C to 32°F', () => {
        const result = celsiusToFahrenheit(0);
        console.log('0°C to 32°F:', result);
        expect(result).toBe(32);
    });

    it('should convert 100°C to 212°F', () => {
        const result = celsiusToFahrenheit(100);
        console.log('100°C to 212°F:', result);
        expect(result).toBe(212);
    });

    it('should convert -40°C to -40°F', () => {
        const result = celsiusToFahrenheit(-40);
        console.log('-40°C to -40°F:', result);
        expect(result).toBe(-40);
    });

    it('should convert 25°C to 77°F', () => {
        const result = celsiusToFahrenheit(25);
        console.log('25°C to 77°F:', result);
        expect(result).toBe(77);
    });

    it('should convert -10°C to 14°F', () => {
        const result = celsiusToFahrenheit(-10);
        console.log('-10°C to 14°F:', result);
        expect(result).toBe(14);
    });
});
