<?php

namespace App\Validator\Constraint;

use Symfony\Component\Validator\{ConstraintValidator, Constraint};
use App\Repository\CompanyRepository;

class UniqueCompanyNameValidator extends ConstraintValidator
{
    /**
     * @var CompanyRepository
     */
    private $repository;

    /**
     * @param CompanyRepository $repository
     */
    public function __construct(CompanyRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * {@inheritdoc}
     */
    public function validate($value, Constraint $constraint)
    {
        if ($value === null || $value === '' || !preg_match('/^.+@\S+\.\S+$/', $value)) {
            return;
        }

        if (in_array($value, $constraint->getExcludedValues())) {
            return;
        }

        $company = $this->repository->findOneByName($value);
        if ($company !== null) {
            $this->context->buildViolation('This name is already taken.')->addViolation();
        }
    }
}
