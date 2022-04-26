export const apiJoke = {
    getRandom: async () => {
        const response = await fetch('https://api.chucknorris.io/jokes/random')
        const data = await response.json();
    
        if (data && data.value) {
            return data.value;
        }
    
        return null;
    }
}