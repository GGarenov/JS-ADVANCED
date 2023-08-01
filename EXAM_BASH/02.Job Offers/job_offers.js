const chai = require('chai');
const { expect, assert } = chai;

class JobOffers {
  constructor(employer, position) {
    this.employer = employer;
    this.position = position;
    this.jobCandidates = [];
  }

  findPerson(name) {
    const person = this.jobCandidates.find((c) => c.name === name);
    return person;
  }
  validatePerson(person, name) {
    if (!person) {
      throw new Error(`${name} is not in the candidates list!`);
    }
  }

  jobApplication(candidates) {
    const currentCandidates = [];
    for (let candidate of candidates) {
      const [name, education, yearsExperience] = candidate.split('-');
      if (!currentCandidates.includes(name)) {
        currentCandidates.push(name);
      }
      // TO DO: check if name is present in jobCandidates
      const person = this.findPerson(name);

      if (person) {
        if (Number(yearsExperience) > Number(person.yearsExperience)) {
          person.yearsExperience = yearsExperience;
        }
        return;
      } else {
        // add the person, with properties: {name, education, yearsExperience} to the jobCandidates array.
        this.jobCandidates.push({
          name: name.trim(),
          education: education.trim(),
          yearsExperience: yearsExperience.trim(),
        });
      }
    }
    return `You successfully added candidates: ${currentCandidates.join(
      ', ',
    )}.`;
  }

  jobOffer(chosenPerson) {
    const [name, minimalExperience] = chosenPerson.split('-');

    const person = this.findPerson(name);

    this.validatePerson(person, name);

    if (Number(minimalExperience) > Number(person.yearsExperience)) {
      throw new Error(
        `${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`,
      );
    }
    person.yearsExperience = 'hired';
    return `Welcome aboard, our newest employee is ${name}.`;
  }

  salaryBonus(name) {
    const person = this.findPerson(name);
    this.validatePerson(person, name);

    switch (person.education) {
      case 'Bachelor':
        return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;

      case 'Master':
        return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;

      default:
        return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
    }
  }

  candidatesDatabase() {
    if (this.jobCandidates.length === 0) {
      throw new Error(`Candidate Database is empty!`);
    }
    return `Candidates list:\n${this.jobCandidates
      .sort((a, b) => {
        return a.name.localeCompare(b.name);
      })
      .map((jobCandidate) => {
        return `${jobCandidate.name}-${jobCandidate.yearsExperience}`;
      })
      .join('\n')}`;
  }
}

describe('Tests JobOffers', () => {
  // describe('test jobApplication functionality', () => {
  //   it('should add new candidates to the jobCandidates array', () => {
  //     // Create an instance of JobOffers
  //     const jobOffers = new JobOffers('CompanyX', 'Software Engineer');

  //     // Call jobApplication with new candidates
  //     const result = jobOffers.jobApplication([
  //       'John-Degree-2',
  //       'Alice-Master-5',
  //     ]);

  //     // Assert that the candidates were successfully added
  //     expect(result).to.equal(
  //       'You successfully added candidates: John, Alice.',
  //     );

  //     // Assert that jobCandidates array contains the new candidates
  //     const john = jobOffers.findPerson('John');
  //     const alice = jobOffers.findPerson('Alice');

  //     expect(john).to.deep.equal({
  //       name: 'John',
  //       education: 'Degree',
  //       yearsExperience: '2',
  //     });
  //     expect(alice).to.deep.equal({
  //       name: 'Alice',
  //       education: 'Master',
  //       yearsExperience: '5',
  //     });
  //   });

  //   it('should update years of experience for existing candidates', () => {
  //     // Create an instance of JobOffers with existing candidates
  //     const jobOffers = new JobOffers('CompanyX', 'Software Engineer');
  //     jobOffers.jobCandidates.push({
  //       name: 'John',
  //       education: 'Degree',
  //       yearsExperience: '2',
  //     });

  //     // Call jobApplication with candidates having more experience
  //     const result = jobOffers.jobApplication(['John-Degree-4']);

  //     // Assert that the candidate's years of experience were updated
  //     expect(result).to.equal('You successfully added candidates: John.');
  //     const john = jobOffers.findPerson('John');
  //     expect(john).to.deep.equal({
  //       name: 'John',
  //       education: 'Degree',
  //       yearsExperience: '4',
  //     });
  //   });

  //   it('should not add duplicate candidates to the jobCandidates array', () => {
  //     // Create an instance of JobOffers with an existing candidate
  //     const jobOffers = new JobOffers('CompanyX', 'Software Engineer');
  //     jobOffers.jobCandidates.push({
  //       name: 'John',
  //       education: 'Degree',
  //       yearsExperience: '2',
  //     });

  //     // Call jobApplication with a candidate already present
  //     const result = jobOffers.jobApplication(['John-Degree-4']);

  //     // Assert that the candidate is not added again
  //     expect(result).to.equal('You successfully added candidates: .');
  //     const john = jobOffers.findPerson('John');
  //     expect(john).to.deep.equal({
  //       name: 'John',
  //       education: 'Degree',
  //       yearsExperience: '4',
  //     });
  //   });
  // });

  describe('jobOffer functionality', () => {
    it('test if minimalExperience is lower than yearsExperience', () => {
      assert.throw(() =>
        JobOffers.jobOffer(
          `${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`,
        ),
      );
    });
    it('test if the minimalExperience is enough', () => {
      assert.throw(() =>
        JobOffers.jobOffer(`Welcome aboard, our newest employee is ${name}.`),
      );
    });
  });
});
